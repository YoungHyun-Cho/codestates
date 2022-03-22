const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
	let user1 = await getDataFromFilePromise(user1Path);
	let user2 = await getDataFromFilePromise(user2Path);
	let result = JSON.parse(`[${user1}, ${user2}]`);
	return result;
}

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}
