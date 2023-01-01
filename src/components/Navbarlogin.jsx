import {Link} from 'react-router-dom';
import '../style/Navbarlogin.css';
const NavbarLogin = ({title}) => {

    return(
    <nav className='navbar-container'>
        <div className="container-navbarLogin">
            <section className="frag1">
                <Link to='/sign' className='Link'>
                    <div className="name-store">
                        <h1 className='firstname'>Ralph</h1>
                        <h1 className='secondname'>Store</h1>
                    </div>
                </Link>
                <h1>{title}</h1>
            </section>
            <div className="frag2">
                <Link to='/*' className='Link'>Butuh bantuan?</Link>
            </div>
        </div>
    </nav>
    )
}

export default NavbarLogin;