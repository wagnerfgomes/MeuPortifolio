import 'styles/standard.css';
import './Home.css';
import Tecnologias from 'components/Tecnologias';
import { DiReact, DiJsBadge, DiGithubBadge } from 'react-icons/di';
import RedesSocias from 'components/RedesSocias';
import iconeLinkedIn from 'assets/linkedIn.svg';
import logoLine from 'assets/Logo/logo-line.svg';
const Home = () => {
    const tecnologiaAtributosIcone = {
        size: 16,
        color: '#9F06FF',
    };
    const redesAtributosIcone = {
        size: 24,
        color: '#0A0E10',
    };

    return (
        <main className="Home__main">
            <img className='Home__main__logo' src={logoLine} alt="Logo de Wagner Felipe" />
            <p className="Home__main__heloworld">Hello, World! eu sou</p>
            <h1 className="Home__main__titulo">Wagner Felipe</h1>
            <p className="Home__main__texto">
                Sou <strong>desenvolvedor front-end </strong> em início de
                carreira, apaixonado por design e código.
            </p>
            <ul className="Home__main__tecnologias">
                <Tecnologias
                    icone={<DiJsBadge {...tecnologiaAtributosIcone} />}
                >
                    JavaScript
                </Tecnologias>
                <Tecnologias icone={<DiReact {...tecnologiaAtributosIcone} />}>
                    React
                </Tecnologias>
            </ul>
            <ul className="Home__main__social">
                <li className="Home__main__social__item">
                    <RedesSocias
                        url={'https://github.com/wagnerfgomes'}
                        icone={<DiGithubBadge {...redesAtributosIcone} />}
                    />
                </li>
                <li className="Home__main__social__item">
                    <RedesSocias
                        url={
                            'https://www.linkedin.com/in/wagnerfelipegomesferreiradev'
                        }
                        icone={
                            <img
                                style={{ width: '2.4rem', padding: '.5rem' }}
                                src={iconeLinkedIn}
                            />
                        }
                    />
                </li>
            </ul>
        </main>
    );
};
export default Home;
