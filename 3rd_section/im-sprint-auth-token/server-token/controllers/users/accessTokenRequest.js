const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  const authorization = req.headers.authorization;
  if (!authorization) res.status(400).send({ data: null, message: "invalid access token" });
  else {
    const token = authorization.split(' ')[1];
    const splitToken = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await Users.findOne({
      where: { userId: splitToken.userId, email: splitToken.email }
    })
    if (!userInfo) return res.status(400).send({ data: null, message: "access token has been tempered" })
    else {
      const data = {
        id: userInfo.dataValues.id, 
        userId: userInfo.dataValues.userId, 
        email: userInfo.dataValues.email,
        createdAt: userInfo.dataValues.createdAt,
        updatedAt: userInfo.dataValues.updatedAt
      }
      return res.status(200).send({ data: { userInfo: data }, message: 'ok'})
    }
  }
};