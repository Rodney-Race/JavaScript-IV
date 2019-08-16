//Prototype Refactor
//1. Copy and paste your code or the solution from yesterday
 //=== GameObject ===
//  function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
  
//   }
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//    };

//   // === CharacterStats ===
//   function CharacterStats(attributes) {
//     GameObject.call(this, attributes);
//     this.healthPoints = attributes.healthPoints;
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
//    };
  
 
//   // === Humanoid (Having an appearance or character resembling that of a human.) ===
//   function Humanoid (attributes) {
//     this.team = attributes.team;
//     this.weapons = attributes.weapons;
//     this.language = attributes.language;
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//     this.healthPoints = attributes.healthPoints;
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//  };

//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });

//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });

//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });

//2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() 
//statements should still return what is expected of them.

/*=== GameObject ===*/
class GameObject {
 constructor(GameObjectAttr) {
   this.createdAt = GameObjectAttr.createdAt;
   this.name = GameObjectAttr.name;
   this.dimensions = GameObjectAttr.dimensions;
 }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
};

/* === CharacterStats ===*/
class CharacterStats extends GameObject {
  constructor(healthPointsAttr) {
    super(healthPointsAttr);
    this.healthPoints = healthPointsAttr.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
};

/* === Humanoid (Having an appearance or character resembling that of a human.) ===*/
class Humanoid extends CharacterStats {
  constructor(HumanoidAttr) {
    super(HumanoidAttr);
    this.team = HumanoidAttr.team;
    this.weapons = HumanoidAttr.weapons;
    this.language = HumanoidAttr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
};

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