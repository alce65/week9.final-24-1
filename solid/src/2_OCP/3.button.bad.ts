{
  class Button {
    constructor(
      private readonly text: string,
      private readonly style: string
    ) {}

    render(): void {
      if (this.style === 'primary') {
        // Lógica para renderizar un botón de estilo primario
      } else if (this.style === 'secondary') {
        // Lógica para renderizar un botón de estilo secundario
      } else {
        throw new Error('Estilo de botón no soportado');
      }
    }
  }

  // Uso de la clase Button
  const primaryButton = new Button('Enviar', 'primary');
  primaryButton.render();

  const secondaryButton = new Button('Cancelar', 'secondary');
  secondaryButton.render();
}
