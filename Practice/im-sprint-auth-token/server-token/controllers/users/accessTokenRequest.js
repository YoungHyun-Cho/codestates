const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // 토큰이 없는 경우 아무런 정보를 주지 않음. 
  if (!req.headers.authorization) res.status(401).send({ data: null, message: 'invalid access token' });

  // 토큰이 있는 경우
  else {
    const accessToken = req.headers.authorization.replace(/^Bearer\s/, "");

    // verify(토큰, 키, 콜백함수) : 토큰 검증.
    const decoded = jwt.verify(accessToken, process.env.ACCESS_SECRET);

    // 토큰에서 추출한 userId가 db에 있는 유저의 userId인지 확인하기 위함.
    const validUser = await Users.findOne({
      where: { userId: decoded.userId }
    });
    if (!validUser) return res.status(401).send({ data: null, message: "access token has been tempered" });
    else {
      const userInfo = validUser.dataValues;
      delete userInfo.password;
      return res.status(200).send({ data: { userInfo }, message: 'ok' });
    }
  }
};