const flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 콘솔 찍어보면 query에 입력이 들어옴. 
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);
    if (req.query.flight_uuid) {
      let byUuid = booking.filter(item => item.flight_uuid === req.query.flight_uuid);
      return res.status(200).json(byUuid);
    }
    else if (req.query.phone) {
      let byPhone = booking.filter(item => item.phone === req.query.phone);
      return res.status(200).json(...byPhone);
    }
    else return res.status(200).json(booking);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    //TODO: 
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);
    let obj = {
      flight_uuid: req.body.flight_uuid,
      name: req.body.name,
      phone: req.body.phone
    };
    booking.push(obj);
    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {
    //TODO: 
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);
    let answer = booking.filter(item => item.phone !== req.query.phone);
    return res.status(200).json(answer);
  }
};
