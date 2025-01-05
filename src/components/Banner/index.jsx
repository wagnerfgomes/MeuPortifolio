import './Banner.css';
import 'styles/standard.css';
import Tecnologias from 'components/Tecnologias';
import { DiReact, DiJsBadge } from 'react-icons/di';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import RedesSocias from 'components/RedesSocias';
import logoLine from 'assets/Logo/logo-line.svg';

const Banner = () => {
    const networksIconAttributes = { size: 24, color: '#0A0E10' };

    const technologyAttributesIcon = {
        size: 16,
        color: '#9F06FF',
    };
    return (
        <section className="Banner">
            <img
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
                <Tecnologias icon={<DiJsBadge {...technologyAttributesIcon} />}>
                    JavaScript
                </Tecnologias>
                <Tecnologias icon={<DiReact {...technologyAttributesIcon} />}>
                    React
                </Tecnologias>
            </ul>
            <ul className="Banner__social">
                <li className="Banner__social__item">
                    <RedesSocias
                        url={'https://github.com/wagnerfgomes'}
                        icon={<FaGithub {...networksIconAttributes} />}
                    />
                </li>
                <li className="Banner__social__item">
                    <RedesSocias
                        url={
                            'https://www.linkedin.com/in/wagnerfelipegomesferreiradev'
                        }
                        icon={<FaLinkedin {...networksIconAttributes} />}
                    />
                </li>
            </ul>
        </section>
    );
};
export default Banner;
