import './Secao.css'

const Secao = ({children, title}) =>{
    return(
        <section className="section">
            <h4 className='section__title'>{title}</h4>
            {children}
        </section>
    )
}
export default Secao