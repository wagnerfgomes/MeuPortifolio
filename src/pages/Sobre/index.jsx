import './Sobre.css';
import 'styles/hover.css';
import Secao from 'components/Secao';
import Butao from 'components/Butao';
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router';
import { DiJsBadge, DiReact } from 'react-icons/di';

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
                            de Sistemas e tenho o objetivo de me tornar um
                            desenvolvedor Front-End.
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

                        <h6 className="sobre__text__title">
                            Onde Pretendo chegar?{' '}
                        </h6>

                        <p className="sobre__text__paragraph">
                            Atualmente, estou focado nos estudos e no
                            desenvolvimento de alguns{' '}
                            <Link
                                target="_blank"
                                className="sobre__text__link underline-center"
                                to={'/projetos'}
                            >
                                projetos{' '}
                                <MdOpenInNew className="sobre__text__link__icon" />
                            </Link>{' '}
                            pessoais. Meu objetivo imediato é consolidar meus
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
                <p className="training__type-text bold">Graduações</p>
                <ul className="training__list">
                    <li className="training__list__itens">
                        <h6 className="training__list__itens__title">
                            Análise e desenvolvimento de Sistemas
                        </h6>
                        <p className="training__list__itens__date bold">
                            2024 - Atualmente
                        </p>
                    </li>
                </ul>
                <p className="training__type-text bold">Técnicas</p>

                <ul className="training__list">
                    <li className="training__list__itens">
                        <h6 className="training__list__itens__title">
                            Redes de computadores
                        </h6>
                        <p className="training__list__itens__date bold">
                            2020 - 2022
                        </p>
                    </li>
                </ul>
            </Secao>
            <Secao border title={'Habilidades'}>
                <section className="hard-skills">
                    <h6 className="hard-skills__title">Técnicas</h6>
                    <br />
                    <ul className="hard-skills__list">
                        <li className="hard-skills__list__itens">
                            <p className="hard-skills__list__itens__text body-1">
                                <strong className="hard-skills__list__itens__text--bold bold">
                                    <DiJsBadge className="hard-skills__list__itens__icon" />
                                    JavaScript:&nbsp;
                                </strong>
                                Linguagem de Programação
                            </p>
                        </li>
                        <li className="hard-skills__list__itens">
                            <p className="hard-skills__list__itens__text body-1">
                                <strong className="hard-skills__list__itens__text--bold bold">
                                    <DiReact className="hard-skills__list__itens__icon" />
                                    React:&nbsp;
                                </strong>
                                Biblioteca de Interface de Usuário.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="soft-skills">
                    <h6 className="soft-skills__title">Sóciais</h6>
                    <br />
                    <ul className="soft-skills__list">
                        <li className="soft-skills__list__itens">
                            <p className="soft-skills__list__itens__text body-1">
                                <strong className="soft-skills__list__itens__text--bold bold">
                                    Comunicação:&nbsp;
                                </strong>
                                Sou bem expressivo. Logo, tento ao máximo expor
                                informações garantindo que as mensagens sejam
                                compreendidas e alinhadas aos objetivos.
                            </p>
                        </li>
                        <li className="soft-skills__list__itens">
                            <p className="soft-skills__list__itens__text body-1">
                                <strong className="soft-skills__list__itens__text--bold bold">
                                    Inteligência Emocional:&nbsp;
                                </strong>
                                Sei lidar bem com minhas emoções, garantindo que
                                elas não interfiram no meu julgamento ou
                                decisões.
                            </p>
                        </li>
                        <li className="soft-skills__list__itens">
                            <p className="soft-skills__list__itens__text body-1">
                                <strong className="soft-skills__list__itens__text--bold bold">
                                    Trabalho em Equipe:&nbsp;
                                </strong>
                                Sou uma pessoa cooperativa e tenho facilidade em
                                lidar com diferentes perfis e personalidades.
                            </p>
                        </li>
                    </ul>
                </section>
            </Secao>
        </main>
    );
};
export default Sobre;
