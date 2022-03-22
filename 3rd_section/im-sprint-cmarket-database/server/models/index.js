const db = require('../db');

module.exports = {
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        // console.log(result);
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      // 테스트케이스에 orders만 나온다 => get 요청을 쓰기 때문. 따라서 모든 정보를 다 가져올 수 있도록 해야 함. 
      // 레퍼런스 코드 공부
      const queryString = `SELECT orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity FROM items
      INNER JOIN order_items ON (order_items.item_id = items.id)
      INNER JOIN orders ON (orders.id = order_items.order_id)
      WHERE (orders.user_id = ?)`;

      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;
      // const queryString = `INSERT INTO orders (user_id, total_price) VALUES (?, ?)`;
      const params = [[userId, totalPrice]];
      console.log('OUTER', params);

      // 인자로 들어가는 params는 구조분해할당을 통해 배열의 형태로 들어감. 즉, param는 이중배열 형태여야 함. 
      db.query(queryString, [params], (error, result) => {
      // db.query(queryString, params, (error, result) => {
        if (result) {
          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`
          const params = orders.map(order => [result.insertId, order.itemId, order.quantity]);
          console.log('INNER', params);
          return db.query(queryString, [params], (error, result) => {
            callback(error, result);
          });
          callback(error, null);
        }
      });


      // // orders 변환
      // let stringOrders = JSON.stringify(orders);
      // orders = JSON.parse(stringOrders);

      // // orders에 삽입
      // const insertOrders = `INSERT INTO orders (user_id, total_price) VALUES (${userId}, ${totalPrice})`;
      // db.query(insertOrders, (error, result) => {
      //   if (error) throw error;
      //   else {
      //     // order_items에 삽입
      //     const insertId = result.insertId;
      //     const insertOrderItems = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;
      //     const params = orders.map(item => [insertId, item.itemId, item.quantity]);

      //     db.query(insertOrderItems, [params], (error, result) => {
      //       if (error) throw error;
      //       else {
      //         // order_items에 삽입 완료

      //         // 각 테이블에서 필요한 정보 가져와야 함.
      //         // items -------> name, price, image
      //         // orders ------> id, total_price, created_at
      //         // order_items -> order_quantity
              
      //         // items에서 정보 가져옴
      //         const selectFromItems = `SELECT name, price, image FROM items WHERE items.id=?`;
      //         const itemIdParams = orders.map(item => [item.itemId]);
      //         db.query(selectFromItems, itemIdParams, (error, result) => {
      //           if (error) throw error;
      //           else {
      //             let stringItems = JSON.stringify(result);
      //             let tempItems = JSON.parse(stringItems); // name, price, image만 있음. 

      //             // orders에서 정보 가져옴
      //             const selectFromOrders = `SELECT id, total_price, created_at FROM orders WHERE orders.id=${insertId}`;
      //             db.query(selectFromOrders, (error, result) => {
      //               if (error) throw error;
      //               else {
      //                 let stringOrders = JSON.stringify(result);
      //                 let tempOrders = JSON.parse(stringOrders); // id, total_price, created_at
                      
      //                 // order_items에서 정보 가져옴
      //                 const selectFromOrderItems = `SELECT order_quantity FROM order_items WHERE order_items.item_id=?`;
      //                 db.query(selectFromOrderItems, itemIdParams, (error, result) => {
      //                   if (error) throw error;
      //                   else {
      //                     let stringOrderItems = JSON.stringify(result);
      //                     let tempOrderItems = JSON.parse(stringOrderItems);
      //                     let answer = [ ...tempItems, ...tempOrders, ...tempOrderItems ];
      //                     callback(error, answer);
      //                   }
      //                 });
      //               }
      //             });
      //           }
      //         });
      //       }
      //     });
      //   }
      // });
    }
  },
};
