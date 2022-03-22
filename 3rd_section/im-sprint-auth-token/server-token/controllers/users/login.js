const { Users } = require('../../models');
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  const userInfo = await Users.findOne({
    where: { userId: req.body.userId, password: req.body.password }
  });
  if (!userInfo) return res.status(404).send({ data: null, message: "not authorized" });
  else {
    const payload = {
      id: userInfo.dataValues.id,
      userId: userInfo.dataValues.userId,
      email: userInfo.dataValues.email,
      createdAt: userInfo.dataValues.createdAt,
      updatedAt: userInfo.dataValues.updatedAt
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "1days" });

    return res
      .status(200)
      .cookie('refreshToken', refreshToken, {
        domain: 'localhost',
        path: '/',
        sameSite: 'none',
        secure: true,
        httpOnly: true
      })
      .send({ data: { accessToken: accessToken }, message: "ok" });
    // return res.status(200).send({ "data": { accessToken }, "message": "ok" });
  }
};
