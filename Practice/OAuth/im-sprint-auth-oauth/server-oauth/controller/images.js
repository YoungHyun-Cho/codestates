const images = require('../resources/resources');

module.exports = (req, res) => {
  // TODO : Mypage로부터 access token을 제대로 받아온 것이 맞다면, resource server의 images를 클라이언트로 보내주세요.
  if (!req.headers.authorization) res.status(403).send({ message: "no permission to access resources" });
  else res.status(200).send({ images });
}

// 조범님 : 오쏘라이제이션이 왜 유효성을 보장하는가? 에 대해서 얘기를 나누면 좋을 것 같다.
// 재현님 : 콜백에서 토큰과 관련해 모든 인증 절차가 끝났다. 
// 조범님 : 액세스 토큰이 발급이 되었다는 것 자체가 인증이 된 것이고, 추가적인 authorization 검증이 굳이 필요하진 않을 것 같다. 

/**
 * withCredentials : 쿠키 요청할 때 필요한다. 
 * 클-섭 오리진 다를 때 쿠키가 자동적으로 추가되지 않는 문제가 발생
 * 이러한 문제를 방지하기 위한게 withCredentials
 * CORS와 같은 맥락
 * 섭-클 간에 직접적인 소통에서는 wC, CORS가 필요한데, OAuth에서는 다른 방식
 * 오스에서는 토큰을 통한 인증 기관이 따로 있다보니 쿠키 어트리뷰트를 사용하는 것이 아니라
 * 액세스 토큰 및 authorization만 담아서 보냄 => 그래서 wC 설정 필요 없음
 */