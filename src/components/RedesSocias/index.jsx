import './RedesSocias.css'

const RedesSocias = ({url, icone}) =>{
    return(
        <a target="_blank" href={url} className="RedesSocias">{icone}</a>
    )
}
export default RedesSocias