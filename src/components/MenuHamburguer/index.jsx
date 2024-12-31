import './MenuHamburguer.css';
import 'styles/standard.css';
import { MdMenu, MdClose } from 'react-icons/md';

import { useState } from 'react';
import NavegacaoLinks from 'components/NavegacaoLinks';

const MenuHamburguer = () => {
    const attributesIcons = {
        size: 24,
        color: '#1C1B1F',
    };

    const [modifyMenu, setModifyMenu] = useState(false);

    return (
        <div>
            <button
                className="button-menu"
                onClick={() => {
                    setModifyMenu(!modifyMenu);
                }}
            >
                {modifyMenu ? (
                    <MdClose {...attributesIcons} />
                ) : (
                    <MdMenu {...attributesIcons} />
                )}
            </button>
            <div className={`${modifyMenu ? 'show-menu' : 'hide-menu'} menu`}>
                <div className="menu__header">
                    <h4>Menu</h4>
                </div>
                <div className={`links-menu-hambuger`}>
                    <NavegacaoLinks className="link-menu-hambuger" to="/">
                        Início
                    </NavegacaoLinks>
                    <NavegacaoLinks className="link-menu-hambuger" to="/sobre">
                        Sobre
                    </NavegacaoLinks>
                    <NavegacaoLinks
                        className="link-menu-hambuger"
                        to="/projetos"
                    >
                        Projetos
                    </NavegacaoLinks>
                </div>
            </div>
        </div>
    );
};
export default MenuHamburguer;
