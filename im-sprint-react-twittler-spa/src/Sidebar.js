import React from 'react';
import { Link } from 'react-router-dom';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul id="noBullet">
        <li>
          <Link to="/">
            <i className="far fa-comment-dots"></i>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="far fa-question-circle"></i>
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className="far fa-user"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;

/*

      <ul>
        <li>
          <Link to="/">
            <i className="far fa-comment-dots"></i>
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <i className="far fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="far fa-question-circle"></i>
          </Link>
        </li>
      </ul>


*/