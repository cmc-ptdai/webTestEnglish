import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__content">
          <div className="row">
            <div className="col-4 menu__content--logo">logo</div>
            <div className="col-8 menu__content--menu">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">giới thiệu</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/taketest">thi thử</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">lịch sử thi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">đề thi đã lưu</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Tạo đề thi</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to = "/">giới thiệu</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu
