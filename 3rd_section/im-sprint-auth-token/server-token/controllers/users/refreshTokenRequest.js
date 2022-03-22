const { Users } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(400).send({ data: null, message: "refresh token not provided" })
  else {
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, async (error, result) => {
      if (error) return res.status(400).send({ data: null, message: "invalid refresh token, please log in again" })
      else {
        const userInfo = await Users.findOne({
          where: { userId: result.userId }
        });
        if (!userInfo) return res.status(400).send({ data: null, message: "refresh token has been tempered" })
        else {
          const payload = {
            id: userInfo.dataValues.id,
            userId: userInfo.dataValues.userId,
            email: userInfo.dataValues.email,
            createdAt: userInfo.dataValues.createdAt,
            updatedAt: userInfo.dataValues.updatedAt
          };
          const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "15m" });
          return res.status(200).send({ data: { accessToken, userInfo: payload }, message: 'ok' });
        }
      }
    });
  }
};