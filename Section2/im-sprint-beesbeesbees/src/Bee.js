const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
	constructor(food, eat) {
		super();
		super.age = 5,
		super.color = 'yellow',
		this.job = 'Keep on growing'
	}
}

module.exports = Bee;
