import React, {useState, useEffect} from 'react'
import './Login.scss'
import accountApi from '../../../api/questionApi'

function Login(){
    const [DisplayForm, setDisplayForm] = useState(false);
    const [title, setTitle] = useState('Thành viên đăng nhập')
    const onSignOut = () =>{
        setDisplayForm(true)
        setTitle('Đăng kí')
    }
    const [account, setAccount] = useState('')
    const fetchAccountApi = async () => {
        const response = await accountApi.fetchAccountApi()
        setAccount(response)
        console.log(response);
      }
    useEffect(() => {
        fetchAccountApi()
    }, [])
    const onSignIn = () =>{
        
    }
    const showFormSignUp = DisplayForm ? (<div className="login__box__form__detail__userpass">
    <i class="fas fa-key-skeleton" style={{padding: '5px 9px'}}></i>
    <input className="password" placeholder="Nhập lại mật khẩu"></input>
    </div>) : '';
    return (
        <div className="login">
            <div className="login__box">
                <div className="login__box__form">
                    <h2>{title}</h2>
                    <div className="login__box__form__title">Hãy đăng nhập thành viên để trải nghiệm đầy đủ các tiện ích trên site</div>
                    <div className="login__box__form__detail">
                        <div className="login__box__form__detail__userpass">
                            <i class="fas fa-user" style={{padding: '5px 10px'}}></i>
                            <input className="username"  placeholder='Nhập tên đăng nhập hoặc email'></input>
                        </div>
                        <div className="login__box__form__detail__userpass">
                            <i class="fas fa-key-skeleton" style={{padding: '5px 9px'}}></i>
                            <input className="password" placeholder="Nhập mật khẩu"></input>
                        </div>
                        {showFormSignUp}
                        <div className="login__box__form__detail__action">
                            <button className="login__box__form__detail__action--save" onClick = {onSignIn}>Đăng nhập</button>
                            <button className="login__box__form__detail__action--start" onClick = {onSignOut}>Đăng kí</button>
                        </div>
                        <div className="login__box__form__detail__facebook">
                            <button>Đăng nhập bằng facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;