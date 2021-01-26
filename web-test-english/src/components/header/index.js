import React from 'react'
import './style.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="row header__title__content">
          <div className="col-6 header__title__content--sdt">
            <p>SDT</p>
          </div>
          <div className="col-6 header__title__content--email">
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className="header__content">
          <div className="row">
            <div className="col-4 header__content--logo">logo</div>
            <div className="col-8 header__content--menu">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">giới thiệu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">trắc nghiệm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">lịch sử thi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">đề thi đã lưu</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">thành viên</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
