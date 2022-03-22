const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  const { userId, password } = req.body;
  const userInfo = await Users.findOne({
    where: { userId, password }
  });
  if (!userInfo) return res.status(404).send({ message: 'not authorized' });
  else {
    const payload = userInfo.dataValues;
    delete payload.password;

    // sign(데이터, 키, 알고리즘)
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: '24h' });
    res.cookie('refreshToken', refreshToken).status(200).send({ data: { accessToken }, message: 'ok' });
  }
};