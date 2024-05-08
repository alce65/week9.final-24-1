{
  class GreetingService {
    constructor(private readonly language: string) {}

    execute(): string {
      switch (this.language) {
        case 'en': {
          return 'Hello';
        }

        case 'es': {
          return 'Hola';
        }

        case 'fr': {
          return 'Bonjour';
        }

        default:
          return '';
      }
    }
  }
}
