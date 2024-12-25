import { Link } from 'react-router';
import './Butao.css';
import 'styles/standard.css';


const Butao = ({ children, to, action, icon, inverted }) => {
    return (
        <button onClick={action} className="button">
            <Link className="link-button body-1-bold" to={to}>
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
