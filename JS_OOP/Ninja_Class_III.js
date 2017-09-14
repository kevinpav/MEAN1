// Ninja Class III - refactor using ES6 objects
class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    // console.log(this)
  }

  sayName(){
      console.log("My ninja name is " + this.name);
  };

  // 'Getter' functions help us read private variables
  showStats(){
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
  }

  drinkSake(){
    this.health += 10;
  }
  punch(opponent){
    if ( !(opponent instanceof Ninja)) {
      console.log("Error: .punch() was passed a non-Ninja object!")
    }
    opponent.health -= 5;
    console.log(`${this.name} punches ${opponent.name}`);
  }
  
  kick(opponent){
    if ( !(opponent instanceof Ninja)) {
      console.log("Error: .kick() was passed a non-Ninja object!")
    }
    opponent.health -= 15;
    console.log(`${this.name} kicks ${opponent.name}`);
  }
}

// Sensei class extends Ninja
class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("Wise message Here..");
  }
}

// JS OOP 1
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
// ninja1.drinkSake();
// ninja1.showStats();

// JS OOP 2
// const blue_ninja = new Ninja("Goemon");
// const red_ninja = new Ninja("Bill Gates");
// red_ninja.punch(blue_ninja);
// red_ninja.kick(blue_ninja);
// red_ninja.punch(blue_ninja);
// blue_ninja.kick(red_ninja);
// blue_ninja.kick(red_ninja);
// red_ninja.showStats();
// blue_ninja.showStats();

// JS OOP 3
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"