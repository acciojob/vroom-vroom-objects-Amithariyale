// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel=fuction(){
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	// this.make
	this.topSpeed=topSpeed;
}
SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}
SportsCar.prototype=Object.create(Car.prototype)
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
