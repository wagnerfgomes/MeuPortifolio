import { Link } from 'react-router';
import './Butao.css';
import 'styles/standard.css';
import 'styles/hover.css';


const Butao = ({ children, to, action, icon, inverted }) => {
    return (
        <button onClick={action} className="button grow">
            <Link className="link-button bold" to={to}>
                {inverted ? (
                    <>
                        {children}
                        {icon}
                    </>
                ) : (
                    <>
                        {icon}
                        {children}
                    </>
                )}
            </Link>
        </button>
    );
};
export default Butao;
