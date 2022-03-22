// import React from 'react';
import Item from '../components/Item';
import React, { useState } from 'react';

function ItemListContainer({ items, onAdd }) {
  // console.log(props.items);

  const handleClick = (event, id) => {
    onAdd(id);
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
