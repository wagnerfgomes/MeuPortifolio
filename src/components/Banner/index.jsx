import './Banner.css';
import 'styles/standard.css';
import Tecnologias from 'components/Tecnologias';
import { DiReact, DiJsBadge } from 'react-icons/di';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import RedesSocias from 'components/RedesSocias';
import logoLine from 'assets/Logo/logo-line.svg';

const Banner = () => {
    return (
        <section className="Banner">
            <img
                data-aos="zoom-in-left"
                className="Banner__logo"
                src={logoLine}
                alt="Logo de Wagner Felipe"
            />
            <p className="Banner__helloworld">Hello, World! eu sou</p>
            <h1 className="Banner__title">Wagner Felipe</h1>
            <p className="Banner__text">
                Sou <strong>desenvolvedor front-end </strong> em início de
                carreira, apaixonado por design e código.
            </p>
            <ul className="Banner__technology">
                <Tecnologias
                    icon={<DiJsBadge className="Banner__technology__icon" />}
                >
                    JavaScript
                </Tecnologias>
                <Tecnologias
                    icon={<DiReact className="Banner__technology__icon" />}
                >
                    React
                </Tecnologias>
            </ul>
            <ul className="Banner__social">
                <li className="Banner__social__item">
                    <RedesSocias
                        url={'https://github.com/wagnerfgomes'}
                        icon={
                            <FaGithub className="Banner__social__item__icon" />
                        }
                    />
                </li>
                <li className="Banner__social__item">
                    <RedesSocias
                        url={
                            'https://www.linkedin.com/in/wagnerfelipegomesferreiradev'
                        }
                        icon={
                            <FaLinkedin className="Banner__social__item__icon" />
                        }
                    />
                </li>
            </ul>
        </section>
    );
};
export default Banner;
