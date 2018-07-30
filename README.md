# Battle-of-the-Minions
CPO 2801 JS assignment "Scarlet Byte"
Vessela Lytle S#547557 COP 2801
createa battle simulation game with constructor classes for Player, Minion, Weapon and Game;
Also prototype methods for attack, attack with (identification of the weapon), isAlive property and applyDamage property.
Create a constructor function or ES6 class for a Player object.
The Player object should have the following properties: Name: Holds the name of the player. Pass into the constructor.
Health: Defaults to 10, do not pass into the constructor, just define and set to 10 in the constructor Strength: Defaults to 2
Weapons: An array of weapons objects. Should be passed into the constructor.
Add a function to the Player prototype called "applyDamage". 
The function takes as input an integer and subtracts that amount of points 
from the players health property. Displays the message "{Player Name} has 
sustained {damage} amount of damage." Where you see 
a value inside dB. display the value from the object or calculated value.
Add a function to the Player prototype called "isAlive". 
This function checks if the players health 
value is greater than 0 and returns true if it is and false if it isn't.*/
Add a function to the Player prototype called "attackWith". 
This function should use a random number between 7 and 0, 
to select a weapon  from the weapons array property, at that index and 
retums that weapon.
Create a constructor function or ES6 class for a Weapon object. It should have the following properties: Name: Holds the name of the weapon. Passed into the constructor.
Damage: Defaults to a random number between 1 and 5, do not pass into the constructor, just define in the constructor and net it.
Add a function to the Weapon prototype called "attack". 
The function takes as input a player, and a minion. 
The attack function should implement the following algorithm: In a loop, 
while both the player and the minion are alive, do the following1. Calculate the actual damage by multiplying the strength 
of the player times the damage value of the weapon.2. Call the applyDamage function of the 
minion object and pass it the actual damage value you just calculated.Call the isAlive function of the minion object. If the minion is dead, exit. 
If the minion is not dead, call the attack function of the minion and pass it the player object.Create a constructor function or ES6 class for a Minion object. The Minion object should have the following properties: Name: 
Default to "Minion" Health: Default to 5 Strength: Default to 2Add a function to the Minion prototype called "applyDamage". 
The function takes as input an integer and subtracts that amount 
of points from the minions health property. Displays the message 
"{Minion Name} has sustained {damage} amount of damage." Where you see a 
value inside of {1, display the value from the object or calculated value.Add a function to the Minion prototype called "IsAlive". 
This function checks if the minions health 
value is greater than 0 and returns true if it is and false if it isn't
Add a function to the Minion prototype called "attack". This function takes 
as input a player and calls the applyDamage of the player, using the minions strength as the inputCreate a constructor function or ES6 class for a Game object. 
Give it the following properties:
Players: An Array to hold the players, Initialize it in the 
constructor to an empty army
Minions: An Array to hold Scarlet Bytes minions. Initialize 
it in the constructor to an empty array
Add a function to the Game class prototype called "createMinions". 
In this function, use a loop to create 20 minions and populate the 
minions array property.Add a function to the Game class prototype called 'createPlayers". 
In this function, do the following:
Create a variable called "weaponsCache" and assign it 8 weapons from the Weapons
discussion forum. Make sure you create and post your weapon in the forum.
Populate the games players array. Use at least 5 of your classmates characters 
posted to the character discussion board in the course. Make sure you post the 
code to create a character representing yourseff in the discussion board. 
populate cache and players arrays
Add a function to the Game class prototype called "play". 
Display "Simulating Battleall the "createMinions" function to create the minions.
Call the "createPlayers" function to create the players. 
create commenceBattle
Select a random player from the player array
Select a random minion from the minon array 
Call the attackWith Method on the player, to get a weapon to attach with. Call the attack method on the weapon and pass it the current player and current minion.
splice off all dead players and minions
While all minions are alive and there are still players alive:
When the loop is completed, display a list of all players currently alive and 
if there am more players left than minions, display "Congratulations, you have defeated Scarlet Byte."
if players are dead before the minions if it ever happens
Create an instance of the Game class and call the play function.
