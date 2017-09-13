

// Private variables are scoped to the constructor with the var keyword
function Ninja(name){

  this.name = name;
  this.health = 100;
  let speed = 3;
  let strength = 3;
  console.log(this)
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

Ninja.prototype.punch = function(opponent){
  if ( !(opponent instanceof Ninja)) {
    console.log("Error: .punch() was passed a non-Ninja object!")
  }
  opponent.health -= 5;
  console.log(this.name + " punches " + opponent.name);
}

Ninja.prototype.kick = function(opponent){
  if ( !(opponent instanceof Ninja)) {
    console.log("Error: .kick() was passed a non-Ninja object!")
  }
  opponent.health -= 15;
  console.log(this.name + " kicks " + opponent.name);
}


// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
// ninja1.drinkSake();
// ninja1.showStats();

const blue_ninja = new Ninja("Goemon");
const red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
red_ninja.kick(blue_ninja);
red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);
blue_ninja.kick(red_ninja);
red_ninja.showStats();
blue_ninja.showStats();