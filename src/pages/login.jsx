import { useState } from 'react';
import '../style/login.css';
import {Link} from 'react-router-dom';
import Navbarlogin from '../components/Navbarlogin';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    let emailStorage = localStorage.getItem("Email");
    let passwordStorage = localStorage.getItem("Password");
    let fullName = localStorage.getItem("Full Name");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === emailStorage && password === passwordStorage){
            Swal.fire({
                icon: 'success',
                title: `Hello ${fullName}`,
              }).then(result => {
                if(result.isConfirmed){
                    document.location = '/';
                }
              })
        }else if(email !== emailStorage) {
            Swal.fire({
                icon : 'error',
                title : 'ERROR!',
                text : 'Email anda salah',
            });
        } else {
            Swal.fire({
                icon : 'error',
                title : 'ERROR!',
                text : 'Password anda salah',
            });
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
      }

      const handlePassword = (e) => {
        setPassword(e.target.value)
      }

      const handleSkip = () => {
        window.localStorage.clear();
      }

    return (
        <div className="navbar-container">
            <Navbarlogin title="Log in"/>
            <div className="login-container">
                <form action="submit" className='form'>
                    <section className="email">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id='email' onChange={handleEmail}/>
                    </section>
                    <section className="password">
                        <label htmlFor="password">Password :</label>
                        <input type="password" id='password'onChange={handlePassword}/>
                    </section>
                    <section className="button">
                        <button type="submit" onClick={handleSubmit}>{email === emailStorage && password === passwordStorage ? <Link to='/' className='link'>Login</Link> : "Login"}</button>
                        <button type="reset">Reset</button>
                        <button type="submit"><Link className='link' to='/sign'>Back</Link></button>
                        <button type="submit"><Link className='link' to='/' onClick={handleSkip}>skip</Link ></button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Login;