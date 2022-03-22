import { useState } from 'react';

export default function MovieRankListPagination({ params, setParams }) {
  const [select, setSelect] = useState(params.selectValue);
  const handleSelect = (event) => {
    // TODO: select.page-select를 제어하는 handleSelect 함수를 작성하세요.
    // controlled component가 될 수 있어야 합니다.
    // selectValue를 제어
    console.log("event.target.value : ", event.target.value)
    console.log("select             : ", select)
    console.log("params.selectValue : ", params.selectValue)
    setParams(event.target.value);
    return setSelect(params.selectValue);
  };

  const handleButton = (event) => {
    // TODO: button.previous-page, button.next-page를 클릭하면 작동하는 handleButton 함수를 작성하세요.
    // pageNum을 제어
    console.log(event.target.value)
    console.log(params)
    if (event.target.value === '-') setParams('-');
    else setParams('+');
    return;
  };

  return (
    <div className='pagination'>
      {/* TODO: select.page-select 엘리먼트를 생성하세요. */}
      <select className='page-select' onChange={handleSelect}>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
      </select>
      <button className='previous-page' onClick={handleButton} value='-'>&#60;</button>
      <span>{params.pageNum}</span>
      <button className='next-page' onClick={handleButton} value='+'>&#62;</button>
    </div>
  );
}
