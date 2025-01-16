import './Menu.css';
import 'styles/standard.css';
import logo from 'assets/Logo/logo-marca.svg';
import NavegacaoLinks from 'components/NavegacaoLinks';
import { Link } from 'react-router';
import MenuHamburguer from 'components/MenuHamburguer';
import { useState } from 'react';

const Menu = ({ standard }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    window.addEventListener('resize', () => setScreenSize(window.innerWidth));

    if (standard) {
        return (
            <nav className="navegation ">
                <Link to="/" className="link-menu body-1">
                    <img
                        className="navegation__logo"
                        src={logo}
                        alt="Logo Marca escrito Wagner Felipe"
                    />
                </Link>
                {screenSize < 1024 ? (
                    <MenuHamburguer />
                ) : (
                    <div className="navegation__links">
                        <NavegacaoLinks to="/">Início</NavegacaoLinks>
                        <NavegacaoLinks to="/sobre">Sobre</NavegacaoLinks>
                        <NavegacaoLinks to="/projetos">Projetos</NavegacaoLinks>
                    </div>
                )}
            </nav>
        );
    } else {
        return (
            <nav
                style={{ display: 'flex', justifyContent: 'center' }}
                className="navegation "
            >
                <Link to="/" className="link-menu body-1">
                    <img
                        className="navegation__logo"
                        src={logo}
                        alt="Logo Marca escrito Wagner Felipe"
                    />
                </Link>
            </nav>
        );
    }
};
export default Menu;
