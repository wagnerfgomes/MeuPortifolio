import './Secao.css'

const Secao = ({children, title, border}) =>{
    return(
        <section className="section">
            <h4 className='section__title'>{title}</h4>
            {border ? <div className="section__content--border">{children}</div> : <div>{children}</div>}
        </section>
    )
}
export default Secao