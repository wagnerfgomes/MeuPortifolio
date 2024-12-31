import 'styles/standard.css';
import './Home.css';
import Tecnologias from 'components/Tecnologias';
import { DiReact, DiJsBadge} from 'react-icons/di';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import RedesSocias from 'components/RedesSocias';
import logoLine from 'assets/Logo/logo-line.svg';

const Home = () => {
    
    const networksIconAttributes = { size: 24, color: '#0A0E10' };

    const technologyAttributesIcon = {
        size: 16,
        color: '#9F06FF',
    };

    return (
        <main className="Home__main">
            <img
                className="Home__main__logo"
                src={logoLine}
                alt="Logo de Wagner Felipe"
            />
            <p className="Home__main__helloworld">Hello, World! eu sou</p>
            <h1 className="Home__main__title">Wagner Felipe</h1>
            <p className="Home__main__text">
                Sou <strong>desenvolvedor front-end </strong> em início de
                carreira, apaixonado por design e código.
            </p>
            <ul className="Home__main__technology">
                <Tecnologias
                    icone={<DiJsBadge {...technologyAttributesIcon} />}
                >
                    JavaScript
                </Tecnologias>
                <Tecnologias icone={<DiReact {...technologyAttributesIcon} />}>
                    React
                </Tecnologias>
            </ul>
            <ul className="Home__main__social">
                <li className="Home__main__social__iten">
                    <RedesSocias
                        url={'https://github.com/wagnerfgomes'}
                        icon={<FaGithub {...networksIconAttributes} />}
                        />
                </li>
                <li className="Home__main__social__item">
                    <RedesSocias
                        url={
                            'https://www.linkedin.com/in/wagnerfelipegomesferreiradev'
                        }
                        icon={<FaLinkedin {...networksIconAttributes} />}
                    />
                </li>
            </ul>
        </main>
    );
};
export default Home;
