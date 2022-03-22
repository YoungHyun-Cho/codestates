const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
	let user1 = getDataFromFilePromise(user1Path);
	let user2 = getDataFromFilePromise(user2Path);
	return Promise.all([user1, user2])
		.then((result) => `[${result}]`)
		.then(result => JSON.parse(result));
}

	readAllUsers()

module.exports = {
  readAllUsers
}
