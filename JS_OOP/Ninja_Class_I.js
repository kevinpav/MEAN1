// Private variables are scoped to the constructor with the var keyword
function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    // Getter function
    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    };
    
    // 'Getter' functions help us read private variables
    this.showStats = function(){
      console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    this.drinkSake = function(){
      this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();
ninja1.showStats();

// var my_car_instance = new Car("Chevy", "Camaro");
// // by returning this, we can chain drive()
// my_car_instance.drive(50).drive(90); 
// // private variable is undefined
// console.log(my_car_instance.odometer);
// // but we can read it with our getter function
// console.log(my_car_instance.readOdometer());