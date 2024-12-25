import './Tecnologias.css'
import 'styles/standard.css'

const Tecnologias = ({icone, children}) =>{
    return(
        <li className='technology'>
            {icone}
            <p className="technology__texto">{children}</p>
        </li>
    )
}
export default Tecnologias
