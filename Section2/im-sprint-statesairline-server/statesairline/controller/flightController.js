const { filter } = require('../repository/flightList');
const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO: request에 있는 정보를 확인해서, 해당 정보에 맞는 요소만 골라서 booking에 담음.
    // 요청의 내용을 일단 받아와야 함. 
    // 요청의 경우의 수 : 출발 또는 도착 시각 && 출발지 또는 도착지
    // 방금 알아본거 : 요청으로 들어온 http 메세지의 내용에 접근하는 방법. : req.query
    // query: This property is an object containing a property for each query string parameter in the route.
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);    
    let filteredFlightList;
    if (req.query.departure_times && req.query.arrival_times) {
      filteredFlightList = await flights.filter(item => item.departure_times === req.query.departure_times && item.arrival_times === req.query.arrival_times);
    }
    else if (req.query.departure && req.query.destination) {
      filteredFlightList = await flights.filter(item => item.departure === req.query.departure && item.destination === req.query.destination);
    }
    else {
      filteredFlightList = flights;
    }
    return res.status(200).json(filteredFlightList);
  },
  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: req의 내용에 접근해서 id에 해당하는 문자열만 긁어와야 함.
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);
    let filteredFlightList;
    if (req.params.id)
      filteredFlightList = await flights.filter(item => item.uuid === req.params.id);
    return res.status(200).json(filteredFlightList);
  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    console.log('params : ', req.params);
    console.log('body   : ', req.body);
    console.log('query  : ', req.query);
    let data = flights.slice();
    let i;
    //TODO: 
    if (req.params.id) {
      for (i = 0; i < data.length; i++) {
        if (data[i].uuid === req.params.id) {
          data[i].uuid = req.params.id;
          if (req.body.departure) data[i].departure = req.body.departure;
          if (req.body.departure_times) data[i].departure_times = req.body.departure_times;
          if (req.body.destination) data[i].destination = req.body.destination;
          if (req.body.arrival_times) data[i].arrival_times = req.body.arrival_times;
          break;
        }
      }
    }
    return res.status(200).json(data[i]);
  }
};
