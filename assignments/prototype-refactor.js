/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor (GOattributes) {
    this.createdAt = GOattributes.createdAt;
    this.name = GOattributes.name;
    this.dimensions = GOattributes.dimensions;
    }
    destroy() {
    return `${this.name} was removed from the game.`;
    }
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
  
class CharacterStats extends GameObject{
    constructor (HPattributes) {
    super (HPattributes);
    this.healthPoints = HPattributes.healthPoints;
    }
    takeDamage () {
        return `${this.name} took damage.`;
    }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
class Humanoid extends CharacterStats{
    constructor (HMattributes) {
    super (HMattributes);
    this.team = HMattributes.team;
    this.weapons = HMattributes.weapons;
    this.language = HMattributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    });

    const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
    });

    const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    });

    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
    constructor(HRattributes) {
    super (HRattributes);
    }
    attack (weapon, enemy) {
        var attack = Math.round(Math.random()*100);
        console.log(`${this.name} attacks ${enemy.name} with his ${weapon} for ${attack} damage.`);
        enemy.healthPoints -= attack;
        console.log(`${enemy.name} has ${enemy.healthPoints} health points left.`)
        return enemy;
    }
} 

class Villain extends Humanoid {
    constructor(HRattributes) {
    super(HRattributes);
    }
    attack (weapon, enemy) {
        var attack = Math.round(Math.random()*100);
        console.log(`${this.name} attacks ${enemy.name} with his ${weapon} for ${attack} damage.`);
        enemy.healthPoints -= attack;
        console.log(`${enemy.name} has ${enemy.healthPoints} health points left.`)
        return enemy;
    }
}

const theHero = new Hero({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 100,
    name: 'Blessed Bob',
    team: 'Good Guys',
    weapons: [
    'Long Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const theVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 100,
    name: 'Evil Eric',
    team: 'Bad Guys',
    weapons: [
    'Magic Staff',
    'Shield',
    ],
    language: 'Common Tongue',
});

function fight(hero, villain) {
    var whoGoesFirst = Math.random();
    if (whoGoesFirst >= 0.5) {
    console.log(`${hero.team} attack first!`);
    while (hero.healthPoints >= 0 && villain.healthPoints >=0) {
        hero.attack(hero.weapons[0],villain);
        if (villain.healthPoints <= 0) {
        console.log(villain.destroy());
        console.log(`${hero.team} win!`);
        break;
        }
        villain.attack(villain.weapons[0],hero);
        if (hero.healthPoints <= 0) {
        console.log(hero.destroy());
        console.log(`${villain.team} win!`);
        break;
        }
    }
    }
    else {
    console.log(`${villain.team} attack first!`);
    while (hero.healthPoints >= 0 && villain.healthPoints >=0) {
        villain.attack(villain.weapons[0],hero);
        if (hero.healthPoints <= 0) {
        console.log(hero.destroy());
        console.log(`${villain.team} win!`);
        break;
        }
        hero.attack(hero.weapons[0],villain);
        if (villain.healthPoints <= 0) {
        console.log(villain.destroy());
        console.log(`${hero.team} win!`);
        break;
        }
    }
    }
}

fight(theHero, theVillain);