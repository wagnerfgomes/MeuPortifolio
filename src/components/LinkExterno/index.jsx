import { Link } from 'react-router';
import './LinkExterno.css';
import { MdOpenInNew } from "react-icons/md";

const LinkExterno = ({children}) =>{
    return(
        <Link className="link-externo body-2 underline-center" to={'/'}>{children}<MdOpenInNew className='link-externo__icon icon-button' /></Link>
    )
}
export default LinkExterno