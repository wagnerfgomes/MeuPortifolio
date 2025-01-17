import './NavegacaoLinks.css';
import 'styles/standard.css';
import 'styles/hover.css';
import { Link, useLocation } from 'react-router';

const NavegacaoLinks = ({ children, to }) => {
    
    const location = useLocation(); 

    return (
        <Link
            className={`${
                location.pathname === to ? 'link-navegation--active' : ''
            } 
            link-navegation body-1 underline-center`}
            to={to}
        >
            {children}
        </Link>
    );
};
export default NavegacaoLinks; 
