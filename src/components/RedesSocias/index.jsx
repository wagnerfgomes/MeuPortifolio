import './RedesSocias.css'
import 'styles/standard.css'
import 'styles/hover.css'

const RedesSocias = ({url, icon}) =>{
    return(
        <a target="_blank" href={url} rel="noreferrer"  className="social-media grow">{icon}</a>
    )
}
export default RedesSocias