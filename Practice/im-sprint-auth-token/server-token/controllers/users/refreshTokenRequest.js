const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  const { refreshToken } = req.cookies

  if (!refreshToken) {
    res.json({ data: null, message: 'refresh token not provided'})
  }
  else {
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
      if (err) {
        res.json({ data: null, message: 'invalid refresh token, please log in again'})
      }
      if (decoded) {
        Users.findOne({
          where: {
            userId: decoded.userId
          }
        })
        .then((result) => {
          if (!result) {
            res.send({ "data": null, "message": "refresh token has been tempered" })
          }
          else {
            const userData = {
              id: result.id,
              userId: result.userId,
              email: result.email,
              createdAt: result.createdAt,
              updatedAt: result.updatedAt,
            };

            const accessToken = jwt.sign(userData, process.env.ACCESS_SECRET, { expiresIn: '30s' });
            res.json({ "data": { "accessToken": accessToken, "userInfo": userData }, "message": "ok" })
          }
        })
      }
    })
  }

//   if(!req.cookies.refreshToken){
//     res.status(401).send({ data: null, message: 'refresh token not provided' });
//   }

//   try {
//     const refreshToken = req.cookies.refreshToken;
//     const userInfo = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
//     delete userInfo.iat;

//     const validUser = await Users.findOne({
//       where: { userId: userInfo.userId, email: userInfo.email },
//     });

//     if(!validUser){
//       res.status(401).json({ data: null, message: 'refresh token has been tempered' });
//     } else {
//       const accessToken = jwt.sign(userInfo, process.env.ACCESS_SECRET);
//       res.status(200).json({ data: { accessToken, userInfo }, message: 'ok' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(401).send({ data: null, message: 'invalid refresh token, please log in again' });
//   }
};
