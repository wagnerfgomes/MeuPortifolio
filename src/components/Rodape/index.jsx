import { Link } from 'react-router'
import './Rodape.css'
import 'styles/standard.css'
import 'styles/hover.css'

const Rodape = () =>{
    return(
        <footer>
            <p className="tooltip">Copyright © <Link to={'/'}><strong className='float' >Wagner Felipe</strong></Link> 2024 Todos os direitos reservados</p>
        </footer>
    )
}
export default Rodape