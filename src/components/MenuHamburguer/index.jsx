import './MenuHamburguer.css';
import 'styles/standard.css';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router';
import { useState } from 'react';

const MenuHamburguer = () => {
    const atributosIcone = {
        size: 24,
        color: '#1C1B1F',
    };

    const [mostrarMenu, setMostrarMenu] = useState(false);

    return (
        <div>
            <button className="button-menu" onClick={() => {setMostrarMenu(!mostrarMenu)}}>
                {mostrarMenu ? <MdClose {...atributosIcone} /> : <MdMenu {...atributosIcone} />}
            </button>
            <div className={`${mostrarMenu ? 'show-menu' : 'hide-menu'} menu`}>
                <div className="menu__header">
                    <h4>Menu</h4>
                </div>
                <div className={`links-menu-hambuger`}>
                    <Link className="link-menu-hambuger body-1" to="/">
                        Início
                    </Link>
                    <Link className="link-menu-hambuger body-1" to="/sobre">
                        Sobre
                    </Link>
                    <Link className="link-menu-hambuger body-1" to="/projetos">
                        Projetos
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default MenuHamburguer;
