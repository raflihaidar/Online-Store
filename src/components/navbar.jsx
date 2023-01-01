import {Link} from 'react-router-dom'
import '../style/navbar.css';
import Swal from 'sweetalert2';
import { FaQuestion, FaSistrix, FaCartPlus, FaInstagramSquare, FaFacebook, FaRegBell, FaGraduationCap} from "react-icons/fa";
import { useState } from 'react';

const Navbar = ({setShow, size}) => {
    const [category, setCategory] = useState("");
    let profile;
    const fullName = localStorage.getItem("Full Name");

    const handleError = () => {
        Swal.fire({
            icon : 'error',
            title : 'ERROR!',
            text : 'Halaman ini tidak tersedia',
        });
    }

    const handleChange = (e) => {
        setCategory(e.target.value);
    }
    
    const handleConfirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Anda ingin Log out?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'log out', 
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title : 'Log Out',
                    text : 'Berhasil Log Out',
                    icon : 'success',
                    showConfirmButton : false,
            })
                setTimeout(() => {
                    document.location = '/login';
                }, 1000)
            }
          })
    }

    if(fullName !== null){
        profile = <Link to='/' className='Link' onClick={handleConfirm}>{fullName}</Link>
    }else{
        profile = <>
        <li><Link className="Link" to='/sign'>Daftar</Link></li>
        <span>|</span>
        <li><Link className="Link" to='/login'>Log in</Link></li>
    </>

}

    return (
        <div className="navigation-container">
            <nav className="nav-container">
                <div className="top">
                    <div className='top-left'>
                        <ul>
                            <li><Link className="Link" onClick={handleError}>Seller Centre</Link></li>
                            <li><Link className="Link" onClick={handleError}>Mulai Jual</Link></li>
                            <li><Link className="Link" onClick={handleError}>Download</Link></li>
                            <li>Ikuti Kami di</li>
                            <li><a href='https://www.instagram.com/shopee_id/' target='blank'><FaInstagramSquare size='1rem' color='#fff'/></a></li>
                            <li><a href='https://www.facebook.com/ShopeeID/' target='blank'><FaFacebook size='1rem' color='#fff'/></a></li>
                            <li><a href='https://www.instagram.com/kampusshopee.id/' target='blank'><FaGraduationCap size='1rem' color='#fff' /></a></li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <ul>
                            <div className="notification">
                                <FaRegBell size='1rem' color='#fff'/>
                                <li><Link className="Link" onClick={handleError}>Notifikasi</Link></li>
                            </div>
                            <div className="question">
                                <FaQuestion size='1rem' color='#fff'/>
                                <li><Link className="Link" onClick={handleError}>Bantuan</Link></li>
                            </div>
                            <select id="">
                                <option value="">Bahasa Indonesia</option>
                                <option value="">English</option>
                            </select>
                            {profile}
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="name-store" onClick={() => setShow(true)}>
                        <h1 className='firstname'>Ralph</h1>
                        <h1 className='secondname'>Store</h1>
                    </div>
                    <div className="search-container">
                        <div className='search'>
                            <input 
                            type="text"
                            placeholder='Belanja Apa Hari Ini?' 
                            value={category} 
                            onChange={handleChange}
                            />
                            <div className='search-icon'>
                                <FaSistrix size='1rem' color='#fff'/>
                            </div>
                        </div>
                        <div className='recommendation'>
                            <ul>
                                <li><Link className="Link" onClick={handleError}>Men's Clothing</Link></li>
                                <li><Link className="Link" onClick={handleError}>Women's Clothing</Link></li>
                                <li><Link className="Link" onClick={handleError}>Jewelery</Link></li>
                                <li><Link className="Link" onClick={handleError}>Electronics</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='hamper' onClick={() => setShow(false)}>
                        <FaCartPlus size='2rem' color='#fff'/>
                        <span>{size}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;