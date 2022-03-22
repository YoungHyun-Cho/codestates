import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul>
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
