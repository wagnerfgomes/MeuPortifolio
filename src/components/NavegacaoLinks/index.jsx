import './NavegacaoLinks.css';
import 'styles/standard.css';
import { Link } from 'react-router';

const NavegacaoLinks = () => {
    return (
        <div className="links-navegation">
            <Link className="link-navegation body-1" to="/">
                Início
            </Link>
            <Link className="link-navegation body-1" to="/sobre">
                Sobre
            </Link>
            <Link className="link-navegation body-1" to="/projetos">
                Projetos
            </Link>
        </div>
    );
};
export default NavegacaoLinks;
