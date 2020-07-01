function createComputerHierarchy() {

    class Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {

            if(this.constructor.name === Computer.name) {
                throw new Error('Something was wrong');
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Keyboard {

        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {

        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {

        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Laptop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {

            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = null;
            this.battery = battery
        }

        get battery() {
            return this._battery;
        }

        set battery(val) {

            if((val instanceof Battery) == false) {
                throw new TypeError;
            }

            this._battery = val;
        }
    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {

            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = null;
            this._monitor = null;
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(val) {

            if((val instanceof Keyboard) == false) {
                throw new TypeError;
            }

            this._keyboard = val;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(val) {
    
            if((val instanceof Monitor) == false) {
                throw new TypeError;
            }

            this._monitor = val;

        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}