/*Vessela Lytle S#547557 COP 2801
 * createa battle simulation game with constructor classes for Player, Minion, Weapon and Game;
 * Also prototype methods for attack, attack with (identification of the weapon), isAlive property and applyDamage property.
 * //////////////
 * Create a constructor function or ES6 class for a Player object.
The Player object should have the following properties: Name: Holds the name of the player. Pass into the constructor.
Health: Defaults to 10, do not pass into the constructor, just define and set to 10 in the constructor Strength: Defaults to 2
Weapons: An array of weapons objects. Should be passed into the constructor.
 */
class Player {
  constructor(name, weapons) {
      this.name = name;
      this.health = 10;
      this.strength = 2;
      this.weapons = weapons;
    }
    /*Add a function to the Player prototype called "applyDamage". 
     * The function takes as input an integer and subtracts that amount of points 
     * from the players health property. Displays the message "{Player Name} has 
     * sustained {damage} amount of damage." Where you see 
     * a value inside dB. display the value from the object or calculated value.
     */
  applyDamage(damage) {
      this.health = this.health - damage;
      console.log(this.name + " has sustained " + damage + "amount of damage.");
    }
    /*Add a function to the Player prototype called "isAlive". 
     * This function checks if the players health 
     * value is greater than 0 and returns true if it is and false if it isn't.*/
  isAlive() {
      return this.health > 0;
    }
    /*Add a function to the Player prototype called "attackWith". 
     * This function should use a random number between 7 and 0, 
     * to select a weapon  from the weapons array property, at that index and 
     * retums that weapon.*/
  attackWith() {
    const randomWeaponIndex = Math.floor(Math.random() * 8);
    return this.weapons[randomWeaponIndex];
  }
}

/*Create a constructor function or ES6 class for a Weapon object. It should have the following properties: Name: Holds the name of the weapon. Passed into the constructor.
Damage: Defaults to a random number between 1 and 5, do not pass into the constructor, just define in the constructor and net it.
*/
class Weapon {
  constructor(name) {
      this.name = name;
      this.max = 5;
      this.min = 1;
      this.damage = Math.random() * (this.max - this.min) + this.min;
    }
    /*Add a function to the Weapon prototype called "attack". 
     * The function takes as input a player, and a minion. 
     * The attack function should implement the following algorithm: In a loop, 
     * while both the player and the minion are alive, do the following*/
  attack(player, minion) {
    console.log(player, minion);
    while (player.isAlive() && minion.isAlive()) {
      /*1. Calculate the actual damage by multiplying the strength 
       * of the player times the damage value of the weapon.*/
      const playerDmg = player.strength * this.damage;
      /*2. Call the applyDamage function of the 
       * minion object and pass it the actual damage value you just calculated.*/
      minion.applyDamage(playerDmg);
      /*Call the isAlive function of the minion object. If the minion is dead, exit. 
       * If the minion is not dead, call the attack function of the minion and pass it the player object.*/
      if (minion.isAlive()) {
        minion.attack(player);
      } else {
        break;
      }
    }
    return player.isAlive();
  }

}
/*Create a constructor function or ES6 class for a Minion object. The Minion object should have the following properties: Name: 
 * Default to "Minion" Health: Default to 5 Strength: Default to 2*/
class Minion {
  constructor() {
      this.name = "Minion";
      this.health = 5;
      this.strength = 2;
    }
    /*Add a function to the Minion prototype called "applyDamage". 
     * The function takes as input an integer and subtracts that amount 
     * of points from the minions health property. Displays the message 
     * "{Minion Name} has sustained {damage} amount of damage." Where you see a 
     * value inside of {1, display the value from the object or calculated value.*/
  applyDamage(damage) {
      this.health = this.health - damage;
      console.log(this.name + " has sustained " + damage + "amount of damage.");
    }
    /*Add a function to the Minion prototype called "IsAlive". 
     * This function checks if the minions health 
     * value is greater than 0 and returns true if it is and false if it isn't*/
  isAlive() {
      return this.health > 0;
    }
    /*Add a function to the Minion prototype called "attack". This function takes 
     * as input a player and calls the applyDamage of the player, using the minions strength as the input*/
  attack(player) {
    player.applyDamage(this.strength);
  }

}
/*Create a constructor function or ES6 class for a Game object. 
 * Give it the following properties:
Players: An Array to hold the players, Initialize it in the 
constructor to an empty army
Minions: An Array to hold Scarlet Bytes minions. Initialize 
it in the constructor to an empty array
*/
class Game {
  constructor() {
      this.players = [];
      this.minions = [];
    }
    /*Add a function to the Game class prototype called "createMinions". 
     * In this function, use a loop to create 20 minions and populate the 
     * minions array property.*/
  createMinions() {
      const emptyMinions = Array.apply(null, Array(20));
      emptyMinions.map(() => this.minions.push(new Minion()));
    }
    /*Add a function to the Game class prototype called 'createPlayers". 
     * In this function, do the following:
    Create a variable called "weaponsCache" and assign it 8 weapons from the Weapons
     discussion forum. Make sure you create and post your weapon in the forum.
    Populate the games players array. Use at least 5 of your classmates characters 
    posted to the character discussion board in the course. Make sure you post the 
    code to create a character representing yourseff in the discussion board. */
  createPlayers() {
      var sword = new Weapon("sword");
      var chakram = new Weapon("chakram");
      var Axe = new Weapon("Axe");
      var boStaff = new Weapon("boStaff");
      var shotgun = new Weapon("Shotgun");
      var glove = new Weapon("Infinity Gauntlet");
      var grenade = new Weapon("Grenade");
      var dreambow = new Weapon("Dream Bow");

      var heWasNumberOne = new Player();
      var queen = new Player();
      var ironProf = new Player();
      var lightning = new Player();
      var bigLou = new Player();
      var Kurgan = new Player();
      /*populate cache and players arrays*/

      const weaponNames = ["sword", "shotgun", "glove", "grenade", "dreambow", "Axe", 
"boStaff", "chakram"];
      const weaponsCache = [];
      weaponNames.map(weaponName => weaponsCache.push(new Weapon(weaponName)));

      const playerNames = ["Smitty Werbenjagermanjensen", "Ice Queen", "Iron Professor", "lightning bolt", "big Lou", "Wild Kurgan"];
      playerNames.map(playerName => this.players.push(new Player(playerName, weaponsCache)));

    }
    /*Add a function to the Game class prototype called "play". */
  play() {
    /*Display "Simulating Battle*/
    console.log("Simulating Battle");
    /*Call the "createMinions" function to create the minions.
     *Call the "createPlayers" function to create the players. */
    this.createMinions();
    this.createPlayers();
    /*create commenceBattle*/
    this.commenceBattle();
  }

  commenceBattle() {
    /*Select a random player from the player array*/
    const randomPlayerIndex = Math.floor(Math.random() * Math.floor(this.players.length));
    const randomPlayer = this.players[randomPlayerIndex];

    console.log(this.minions);
    /*Select a random minion from the minon array */
    const randomMinionIndex = Math.floor(Math.random() * Math.floor(this.minions.length));
    const randomMinion = this.minions[randomMinionIndex];
    /*Call the attackWith Method on the player, to get a weapon to attach with. */
    const weapon = randomPlayer.attackWith();
    /*Call the attack method on the weapon and pass it the current player and current minion.*/
    const minionKilled = weapon.attack(randomPlayer, randomMinion);
    if (minionKilled) {
      /*splice off all dead players and minions*/
      this.minions.splice(randomMinionIndex, 1);
    } else {
      this.players.splice(randomPlayer, 1);
    }
    /*While all minions are alive and there are still players alive:*/
    if (this.players.length > 0 && this.minions.length > 0) {
      this.commenceBattle();
      /*When the loop is completed, display a list of all players currently alive and 
       * if there am more players left than minions, display "Congratulations, you have defeated Scarlet Byte."*/
    } else if (this.minions.length === 0) {
      console.log("Congratulations! You have defeated the Scarlet Byte!");
    } else {
      /*if players are dead before the minions if it ever happens*/
      console.log("Players lost");
    }
  }

}
/*Create an instance of the Game class and call the play function.*/
const game = new Game();
game.play();