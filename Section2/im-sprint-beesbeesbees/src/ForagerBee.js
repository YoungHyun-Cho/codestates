const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor (canFly, treasureChest) {
    super();
    super.age = 10;
    super.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;
