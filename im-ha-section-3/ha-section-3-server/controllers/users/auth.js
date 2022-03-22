const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  if (!req.headers.cookie) return res.status(401).send({ data: null, message: 'not authorized' });
  const accessTokenData = isAuthorized(req);
  const { email } = accessTokenData;
  const userInfo = await user.findOne({ where: { email } });
  delete userInfo.dataValues.password;
  return res.status(200).json({ data: { userInfo: userInfo.dataValues }, message: 'ok' });
};




// module.exports = (req, res) => {
//   // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
//   if (!req.headers.cookie) return res.status(401).send({ data: null, message: 'not authorized' });
//   const accessTokenData = isAuthorized(req);
//   delete accessTokenData.password;
//   return res.status(200).send({ data : { userInfo: accessTokenData } });
// };


// else {
//   const { email } = accessTokenData;
//   user.findOne({
//     where: { email }
//   })
//   .then(data => {
//     delete data.dataValues.password;
//     res.status(200).json({ data : { userInfo: data.dataValues }, message: 'ok'});
//   })
//   .catch(error => {
//     console.log(error);
//   })
// }