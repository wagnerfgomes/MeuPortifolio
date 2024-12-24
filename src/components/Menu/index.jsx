import './Menu.css';
import 'styles/standard.css';
import logoMarca from 'assets/Logo/logo-marca.svg';
import NavegacaoLinks from 'components/NavegacaoLinks';
import { Link } from 'react-router';
import MenuHamburguer from 'components/MenuHamburguer';
import { useState } from 'react';

const Menu = () => {
    const [tamanhoTela, setTamnhoTela] = useState(window.innerWidth);

    window.addEventListener('resize', () =>
        setTamnhoTela(window.innerWidth)
    );

    return (
        <nav className="navegacao ">
            <Link to="/" className="link-menu body-1">
                <img
                    className="logo-marca"
                    src={logoMarca}
                    alt="Logo Marca escrito Wagner Felipe"
                />
            </Link>
            {tamanhoTela < 1024 ? <MenuHamburguer /> : <NavegacaoLinks />}
        </nav>
    );
};
export default Menu;