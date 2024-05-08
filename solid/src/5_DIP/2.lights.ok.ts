type Switchable = {
  isOn: boolean;
  turnOn(): void;
  turnOff(): void;
};

class LightBulb implements Switchable {
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
// Se cumple el principio de inversión de dependencias (DIP)

class Switch {
  constructor(private readonly device: Switchable) {}

  toggle(): void {
    if (this.device.isOn) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }
}

const device = new LightBulb();
const switcher = new Switch(device);

switcher.toggle();
