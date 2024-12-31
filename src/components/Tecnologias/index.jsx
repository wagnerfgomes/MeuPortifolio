import './Tecnologias.css'
import 'styles/standard.css'

const Tecnologias = ({icon, children}) =>{
    return(
        <li className='technology'>
            {icon}
            <p className="technology__text">{children}</p>
        </li>
    )
}
export default Tecnologias
