import { Link } from 'react-router';
import './Butao.css';
import 'styles/standard.css';
import 'styles/hover.css';


const Butao = ({ children, to, action, icon, inverted, full}) => {
    return (
        <button style={full ? ({width: '100%'}) : ({width: 'fit-content'})} onClick={action} className="button grow">
            <Link target='_blank'  className="link-button bold" to={to}>
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
