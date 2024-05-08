{
  class LightBulb {
    constructor(private _isOn = false) {}

    get isOn(): boolean {
      return this._isOn;
    }

    turnOn(): void {
      console.log('Bombilla encendida');
      this._isOn = true;
    }

    turnOff(): void {
      console.log('Bombilla apagada');
      this._isOn = false;
    }
  }

  // Inyección de dependencias a nivel de clase
  // No se cumple el principio de inversión de dependencias (DIP)

  class Switch {
    constructor(private readonly bulb: LightBulb) {}

    toggle(): void {
      if (this.bulb.isOn) {
        this.bulb.turnOff();
      } else {
        this.bulb.turnOn();
      }
    }
  }

  const bulb = new LightBulb();
  const switcher = new Switch(bulb);

  switcher.toggle();
}
