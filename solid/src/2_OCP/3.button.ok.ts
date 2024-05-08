{
  type ButtonStyle = {
    render(text: string): void;
  };

  class PrimaryButtonStyle implements ButtonStyle {
    constructor(private readonly text: string) {}
    render(text: string): void {
      // ...logic
    }
  }

  class SecondaryButtonStyle implements ButtonStyle {
    constructor(private readonly text: string) {}
    render(text: string): void {
      // ...logic
    }
  }

  class Button {
    constructor(
      private readonly text: string,
      private readonly buttonStyle: ButtonStyle
    ) {}

    render(): void {
      this.buttonStyle.render(this.text);
    }
  }

  // Uso de la clase Button
  const primaryButton = new Button('Enviar', new PrimaryButtonStyle('Enviar'));

  primaryButton.render();

  const secondaryButton = new Button(
    'Cancelar',
    new SecondaryButtonStyle('Cancelar')
  );

  secondaryButton.render();
}
