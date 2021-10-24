//№1
function Animal(name, legs, color){
    this.name = name;
    this.legs = legs;
    this.color = color;
}
Animal1 = new Animal("cat", "4", "black");
Animal1.toString();
Animal.prototype.toString = function objToString() {
    let obj = "This" + ' ' + this.color + ' ' + this.name + ' ' + "has" + ' ' + this.legs + ' ' + "legs";
    return obj;
}
alert(Animal1.toString());


//№2
function Calculator() {
    this.read = function() {
        this.x = +prompt('x?');
        this.y = +prompt('y?');
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };
}
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum());
alert( "Mul=" + calculator.mul());