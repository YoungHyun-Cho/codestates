const { resolve } = require('path');
const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  const user1Promise = getDataFromFilePromise(user1Path);
  const user2Promise = getDataFromFilePromise(user2Path);
  let answer = [];
  return Promise.all([user1Promise, user2Promise])
    .then(res => JSON.parse(`[${res}]`));
}

// readAllUsers()

module.exports = {
  readAllUsers
}