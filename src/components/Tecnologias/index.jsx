import './Tecnologias.css'
import 'styles/standard.css'

const Tecnologias = ({icone, children}) =>{
    return(
        <li className='Tecnologias'>
            {icone}
            <p className="Tecnologias__texto">{children}</p>
        </li>
    )
}
export default Tecnologias