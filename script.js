// Complete the js code
function Car(make, model) {
	class Car {
		constructor() {
			this.make=make;
			this.model=model;
		}
		
	}
}
Car.prototype.getMakeModel=fuction(){
			return `${this.make} ${this.model}`;
		}

function SportsCar(make, model, topSpeed) {
	class SportsCar extends Car {
		constructor() {
			super(make,model);
			this.topSpeed=topSpeed;
		}
		
	}
}
SportsCar.prototype.getTopSpeed=function(){
			return this.topSpeed;
		}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
