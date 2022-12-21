import {Link} from 'react-router-dom';
import '../style/Navbarlogin.css';
const NavbarLogin = (props) => {
    return(
    <nav className='navbar-container'>
        <div className="container-navbarLogin">
            <section className="frag1">
                <div className="name-store">
                    <h1 className='firstname'>Ralph</h1>
                    <h1 className='secondname'>Store</h1>
                </div>
                <h1>{props.title}</h1>
            </section>
            <div className="frag2">
                <Link to='/*' className='Link'>Butuh bantuan?</Link>
            </div>
        </div>
    </nav>
    )
}

export default NavbarLogin;