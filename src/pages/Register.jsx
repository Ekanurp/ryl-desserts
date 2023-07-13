import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();
  return (
    <div className='all'>
        <div className='wrapper'>
          <div>
            <div className='title login'>Register</div>
          </div>
          <div className='form-container'>
            <div className='form-inner'>
              <form action='#' className='signup'>
                <div className="field">
                  <input type="text" placeholder="Masukan Nama" required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Masukan Email" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Masukan Password" required />
                </div>
                <div className="field-btn">
                  <input type="submit" value="Daftar" onClick={() => navigate("/testimoni")}/>
                </div>
                <div className="signup-link">Sudah punya akun? <Link to="/testimoni">Login</Link></div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register;