const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  const { email, password, username, mobile } = req.body;
  if (!email || !password || !username || !mobile) return res.status(422).send('insufficient parameters supplied');
  const [ userInfo, created ] = await user.findOrCreate({
    where: { email },
    defaults: { email, password, username, mobile }
  });
  if (!created) return res.status(409).send('email exists');
  delete userInfo.password;
  const accessToken = generateAccessToken(userInfo.dataValues);
  return res.status(201).cookie('jwt', accessToken).json({ message: 'ok' });
  // json 인자 안에 data: accessToken 들어가면 테스트 케이스 틀렸다고 뜸
};