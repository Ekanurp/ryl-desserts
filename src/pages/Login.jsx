import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='all'>
        <div className='wrapper'>
          <div>
            <div className='title login'>Login</div>
          </div>
          <div className='form-container'>
            <div className='form-inner'>
              <form action='#' className='login'>
                <div className="field">
                  <input type="text" placeholder="Masukan Email " required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Masukan Password" required />
                </div>
                <div className="pass-link"><Link to="">Lupa password?</Link></div>
                <div className="field-btn">
                  <Link to="/login"><input type="submit" value="Login"/></Link>
                </div>
                <div className="signup-link">Buat akun <Link to="/register">Daftar sekarang</Link></div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login;