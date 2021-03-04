import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <div className="row header__title__content">
          <div className="col-4 header__title__content--sdt">
            <p>SDT</p>
          </div>
          <div className="col-4 header__title__content--email">
            <p>Email</p>
          </div>
          <div className="col- header__title__content--email">
            <Link to='/login'>đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
