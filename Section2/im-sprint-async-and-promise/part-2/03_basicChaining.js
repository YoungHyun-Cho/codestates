const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
	return new Promise((resolve, reject) => {
    let result = [];
    getDataFromFilePromise(user1Path)
      .then((user1) => {
        result.push(JSON.parse(user1));
        return getDataFromFilePromise(user2Path);
      })
      .then((user2) => {
        result.push(JSON.parse(user2));
        resolve(result);
      });
	});
};

	readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}
