import 'styles/standard.css';
import './Home.css';
import Banner from 'components/Banner';
import Secao from 'components/Secao';
import CardPorjetos from 'components/CardProjetos';
import Butao from 'components/Butao';
import { MdOpenInNew } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

const Home = () => {
    return (
        <main>
            <Banner />
            <Secao title={'Projetos'}>
                <ul className='projects__list'>
                    <CardPorjetos
                        imgUrl={
                            'https://static.wixstatic.com/media/a261d7_6913b19216da4c99b832160a86f65bb3~mv2.jpg/v1/fill/w_980,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img-PT-d.jpg'
                        }
                        imgAlt={'Imagem do Projeto'}
                        nameProject={'Projeto'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a rutrum arcu. Aenean nec interdum tortor. Fusce lacinia sollicitudin venenatis. '
                        }
                        technologys={['HTML', 'CSS', 'JavaScript', 'React']}
                    />
                    <CardPorjetos
                        imgUrl={
                            'https://static.wixstatic.com/media/a261d7_6913b19216da4c99b832160a86f65bb3~mv2.jpg/v1/fill/w_980,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img-PT-d.jpg'
                        }
                        imgAlt={'Imagem do Projeto'}
                        nameProject={'Projeto'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a rutrum arcu. Aenean nec interdum tortor. Fusce lacinia sollicitudin venenatis. '
                        }
                        technologys={['HTML', 'CSS', 'JavaScript', 'React']}
                    />
                    <CardPorjetos
                        imgUrl={
                            'https://static.wixstatic.com/media/a261d7_6913b19216da4c99b832160a86f65bb3~mv2.jpg/v1/fill/w_980,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img-PT-d.jpg'
                        }
                        imgAlt={'Imagem do Projeto'}
                        nameProject={'Projeto'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a rutrum arcu. Aenean nec interdum tortor. Fusce lacinia sollicitudin venenatis. '
                        }
                        technologys={['HTML', 'CSS', 'JavaScript', 'React']}
                    />
                </ul>
                <Butao
                    inverted
                    icon={
                        <MdOpenInNew className="Home__button__icon icon-button" />
                    }
                    to={'/projetos'}
                >
                    Ver outros projetos
                </Butao>
            </Secao>
            <Secao title={'Que tal construirmos algo juntos?'}>
                <h6 className="contact__subtitle">Entre em contato</h6>
                <div className="contact__container">
                    <Butao
                        icon={
                            <SiGmail className="Home__button__icon icon-button" />
                        }
                        to={'mailto:wagnerfelipegf@gmail.com'}
                    >
                        Gmail
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
            </Secao>
        </main>
    );
};
export default Home;
