import './RedesSocias.css'

const RedesSocias = ({url, icon}) =>{
    return(
        <a target="_blank" href={url} rel="noreferrer"  className="social-media">{icon}</a>
    )
}
export default RedesSocias