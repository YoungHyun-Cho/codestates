const models = require('../models');

module.exports = {
  items: {
    get: (req, res) => {
      models.items.get((error, result) => {
        if (error) {
          res.status(500).send('Internal Server Error');
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
  orders: {
    get: (req, res) => {
      const userId = req.params.userId;
      // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
      models.orders.get(userId, (error, result) => {
        console.log("🌈");
        if (!userId) return res.staus(401).send('Unauthorized user');
        else {
          if (error) res.status(500).send();
          else res.status(200).json(result);
        }
      });
    },
    post: (req, res) => {
      const userId = req.params.userId;
      const { orders, totalPrice } = req.body;
      // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
      if (!userId || !orders || !totalPrice) return res.status(400).send();
      models.orders.post(userId, orders, totalPrice, (error, result) => {
        if (error) res.status(500).send('Something Wrong.');
        else res.status(201).send();
      });
    },
  },
};
