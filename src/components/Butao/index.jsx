import { Link } from 'react-router';
import './Butao.css';
import 'styles/standard.css';


const Butao = ({ children, to, acao, icone, invertido }) => {
    return (
        <button onClick={acao} className="butao ">
            <Link className="link-butao body-1-bold" to={to}>
                {invertido ? (
                    <>
                        {children}
                        {icone}
                    </>
                ) : (
                    <>
                        {icone}
                        {children}
                    </>
                )}
            </Link>
        </button>
    );
};
export default Butao;
