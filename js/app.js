/* 

SPACE BATTLE

    Create functions that generate random numbers for AlienShips' props.

    Create a Ship class with hull, firepower, and accuracy props.

    Create UssAssembly sub-class of Ship class that sets the value of the props.

    Create AlienShip sub-class of Sip class that sets the value of the props to a random number within the range provided.

*/

// random function to create random numbers for the alien props
function random(max, min, dec) {
    let num = Math.random() * (max - min) + min;
    let fixedNum = Number(num.toFixed(dec));
    return fixedNum;
}

// parent ship class
class Ship {
    constructor(name) {
        this.name = name;
        this.hull = 0;
        this.firepower = 0;
        this.accuracy = 0;
    }
}

// UssAssembly sub-class that holds the method for the attack game-play
class UssAssembly extends Ship {
    constructor(name) {
        super(name);
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    attack(){
        // for loop that ultimately changes the alien ship that is attacking
        for (let i = 0; i < alien.length; i++) {
            let currentAlien = alien[i];
            console.log(currentAlien);
            // This while loop goes through the attack sequence between the player and the aliens
            while (this.hull > 0 && currentAlien.hull > 0) {
                if (this.hull > 0 && currentAlien.hull > 0) {
                    if (Math.random() < this.accuracy) {
                        currentAlien.hull -= this.firepower;
                        console.log(`You hit ${currentAlien.name}! Your Hull: ${this.hull}, Aliens' Hull ${currentAlien.hull}`);
                    } else {
                        console.log(`Oh No! You missed ${currentAlien.name}! Your Hull: ${this.hull}, Aliens' Hull ${currentAlien.hull}`)
                    }
                }
                if (this.hull > 0 && currentAlien.hull > 0) {
                    if (Math.random() < currentAlien.accuracy) {
                        this.hull -= currentAlien.firepower;
                        console.log(`${currentAlien.name} damaged your ship! Your Hull: ${this.hull}, Aliens' Hull ${currentAlien.hull}`);
                    } else {
                        console.log(`Yes! You successfully evaded ${currentAlien.name}'s attack! Your Hull: ${this.hull}, Aliens' Hull ${currentAlien.hull}`);
                    }
                }
            }
            console.log(`You defeated ${alien[i].name}`);
            // Conditional that checks if the current alien is the last and exits the for loop above
            if (currentAlien === alien[5]) {
                console.log('You won the game');
                return;
            }
            // If not the last alien then we check if we're still alive and then ask the user via prompt what action to preform next
            if (this.hull > 0) {
                // console.log(`You defeated ${alien[i].name}`);
                const reg = /[\W_]/g;
                let attackAgain = prompt('Would you like to attack the next ship?', 'yes or no');
                let lowerAttack = attackAgain.toLowerCase().replace(reg, '');
                if (lowerAttack !== 'yes') {
                    alert('Goodbye quitter');
                    return;
                }
            }
        }
    }
}

// AlienShip sub-class
class AlienShip extends Ship {
    constructor(name) {
        super(name);
        this.hull = random(6, 3, 0);
        this.firepower = random(4, 2, 0);
        this.accuracy = random(.8, .6, 1);
    }
}

// Instantiated UssAssembly
const ussAssembly = new UssAssembly('USS Assembly');

// Instantiated AlienShips that are then pushed to an array
const alien1 = new AlienShip('Alien 1');
const alien2 = new AlienShip('Alien 2');
const alien3 = new AlienShip('Alien 3');
const alien4 = new AlienShip('Alien 4');
const alien5 = new AlienShip('Alien 5');
const alien6 = new AlienShip('Alien 6');

const alien = [];
alien.push(alien1, alien2, alien3, alien4, alien5, alien6);

// playGame function that is called by the event handle on the button tag in index.html
function playGame(){
    ussAssembly.attack();
}