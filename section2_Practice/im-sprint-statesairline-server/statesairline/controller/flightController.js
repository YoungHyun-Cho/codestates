let flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    //TODO: 
    let filteredFlightList;
    const query = req.query;
    if (query.departure_times && query.arrival_times) {
      filteredFlightList = flights.filter(item => 
        item.departure_times === query.departure_times
        && item.arrival_times === query.arrival_times
      );
    }
    else if (query.departure && query.destination) {
      filteredFlightList = flights.filter(item => 
        item.departure === query.departure
        && item.destination === query.destination
      );
    }
    else filteredFlightList = flights;
    return res.status(200).json(filteredFlightList);
  },

  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    //TODO: 
    const params = req.params;
    const filteredById = flights.filter(item => item.uuid === params.id);
    return res.json(filteredById);


  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    // //TODO: 기존의 flights 데이터를 수정
    let data = [...flights];
    let filtered = data.filter(item => item.uuid === req.params.id);
    filtered[0] = {...filtered[0], ...req.body}
    flights = data.map(item => item.uuid === req.params.id ? filtered[0] : item);
    return res.status(200).json(filtered[0]);
  }
};
