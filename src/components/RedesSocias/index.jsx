import './RedesSocias.css'

const RedesSocias = ({url, icone}) =>{
    return(
        <a target="_blank" href={url} rel="noreferrer"  className="social-media">{icone}</a>
    )
}
export default RedesSocias