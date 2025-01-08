import './Sobre.css';
import 'styles/hover.css';
import Secao from 'components/Secao';
import Butao from 'components/Butao';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router';

const Sobre = () => {
    return (
        <main>
            <Secao border title={'Sobre Mim'}>
                <div className="sobre-organization">
                    <img
                        className="sobre__img float"
                        src="https://github.com/wagnerfgomes.png"
                        alt="Imagem de Perfil"
                    />
                    <div className="sobre__container">
                        <Butao
                            icon={
                                <SiGithub className="Home__button__icon icon-button" />
                            }
                            to={'https://github.com/wagnerfgomes'}
                        >
                            GitHub
                        </Butao>
                        <Butao
                            icon={
                                <SiLinkedin className="Home__button__icon icon-button" />
                            }
                            to={'/'}
                        >
                            Linkedin
                        </Butao>
                        <Butao
                            icon={
                                <SiInstagram className="Home__button__icon icon-button" />
                            }
                            to={'/'}
                        >
                            Instagram
                        </Butao>
                    </div>
                    <div className="sobre__text">
                        <p className="sobre__text__paragraph">
                            Meu nome é Wagner Felipe Gomes, moro em Pernambuco,
                            Brasil. Sou estudante de Análise e Desenvolvimento
                            de Sistemas e tenho o objetivo de me tornar um desenvolvedor Front-End.
                        </p>
                        <p className="sobre__text__paragraph">
                            Apesar de ainda não possuir experiência profissional
                            na área, minha paixão pela tecnologia sempre esteve
                            presente e se intensificou durante o ensino médio,
                            quando estudei em uma Escola Técnica Estadual (ETE).
                            Durante três anos, cursei Redes de Computadores, o
                            que me ajudou a descobrir minha vocação e consolidar
                            meu interesse pela área de desenvolvimento.
                        </p>

                        <h6 className='sobre__text__title'>Onde Pretendo chegar? </h6>

                        <p className="sobre__text__paragraph">
                            Atualmente, estou focado nos estudos e no
                            desenvolvimento de alguns <Link className='sobre__text__link float' to={'/projetos'}>projetos</Link> pessoais. Meu objetivo imediato é consolidar meus
                            conhecimentos em desenvolvimento Front-End, mas
                            minhas aspirações vão além: no futuro, pretendo me
                            tornar um desenvolvedor Full Stack. Sigo avançando
                            um dia de cada vez, com dedicação constante e sempre
                            buscando aprendizado e evolução.
                        </p>
                    </div>
                </div>
            </Secao>
            <Secao border title={'Formações'}>

            </Secao>
            <Secao title={'Sobre Mim'}></Secao>
        </main>
    );
};
export default Sobre;
