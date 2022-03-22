import React from 'react'

export default function Item({ item, handleCart }) {

  return (
    <div key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name}></img>
      <span className="item-name">{item.name}</span>
      <span className="item-price">{item.price}</span>
      <button className="item-button" onClick={() => handleCart(item.id)}>장바구니 담기</button>
    </div>
  )
}
