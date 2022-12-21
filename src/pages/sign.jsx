import '../style/sign.css';
import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbarlogin from '../components/Navbarlogin';
import Swal from 'sweetalert2';
const Sign = () => {

    const [firstName, setFirstName] = useState(' ');
    const [secondName, setSecondName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [date, setDate] = useState(0);

    const fullName = `${firstName} ${secondName}`;
    let settings = password === confirmPassword && password !== " " && date !== 0 && fullName !== null;
    const handleSubmit = (e) => {
      e.preventDefault()
      if(settings){
        Swal.fire({
          icon: 'success',
          title: 'Akun anda telah dibuat',
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);      
        localStorage.setItem("Full Name", fullName);      
      } else {
        Swal.fire({
          icon : 'error',
          title : 'ERROR!',
          text : 'Input tidak boleh kosong',
        });
      }
    }

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
  
    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value)
    }
  
    const handleFirstName = (e) => {
      setFirstName(e.target.value)
    }
  
    const handleSecondName = (e) => {
      setSecondName(e.target.value)
    }

    const handleDate = (e) => {
      setDate(e.target.value)
    }

    const handleReset = () => {
        setFirstName("");
        setSecondName("");
        setEmail("");
        setPassword("");
      }

    useEffect(() => {
        document.title = `Sign Form ${fullName}`;
    })


    return(
      <div className="sign-container">
        <Navbarlogin title="Daftar"/>
        <div className="App">
            <form className='form'>
              <input type="text" value={fullName} disabled  className='get-name'/>
              <section className="name">
                <div className='first-name'>
                  <label htmlFor="firstName">Nama Depan</label>
                  <input type="text" onChange={handleFirstName}  id='firstName' />
                </div>
                <div className="second-name">
                  <label htmlFor="secondName">Nama Belakang</label>
                  <input type="text" onChange={handleSecondName} id="secondName" />
                </div>
              </section>
              <section className="email">
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={handleEmail} id='email'/>
              </section>
              <section className="password">
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={handlePassword} id='password'/>
              </section>
              <section className="confirm-password">
                <label htmlFor="confirm-password">Confirm Password: </label>
                <input type="password"  id="confirm-password" onChange={handleConfirmPassword}/>
              </section>
              <section className="birthday">
                <label htmlFor="date">Birthday</label>
                <input type="date" id="date" onChange={handleDate}/>
              </section>
              <section className="button">
                <button  onClick={handleSubmit}>{ password === confirmPassword && password !== " " && date !== 0 && fullName !== null ? <Link className='link' to='/login'>Sign in</Link> : "Sign in"}</button>
                <button  onClick={handleReset}>Reset</button>
                <button><Link to='/login' className='link'>Skip Halaman ini</Link></button>
            </section>
            <section>
              <p>Sudah punya akun? <Link to='/login' className='Link'>Daftar</Link></p>
            </section>
            </form>
        </div>
      </div>
    )
}

export default Sign;