type LanguageProvider = {
  greet(): string;
};

class EnLanguageProvider implements LanguageProvider {
  greet(): string {
    return 'Hello';
  }
}

class FrLanguageProvider implements LanguageProvider {
  // Returns a greeting in french
  greet(): string {
    return 'Bonjour';
  }
}

class EsLanguageProvider implements LanguageProvider {
  // Returns a greeting in french
  greet(): string {
    return 'Hola';
  }
}

class GreetingService {
  constructor(private readonly language: LanguageProvider) {}

  execute(): string {
    return this.language.greet();
  }
}

const provider = new EsLanguageProvider();
const greetingService = new GreetingService(provider);
greetingService.execute();
