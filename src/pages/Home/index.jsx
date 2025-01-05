import 'styles/standard.css';
import './Home.css';
import Banner from 'components/Banner';
import Secao from 'components/Secao';
import CardPorjetos from 'components/CardProjetos';

const Home = () => {
    return (
        <main>
            <Banner />
            <Secao title={'Projetos'}>
                <ul>
                    <CardPorjetos
                        imgUrl={
                            'https://static.wixstatic.com/media/a261d7_6913b19216da4c99b832160a86f65bb3~mv2.jpg/v1/fill/w_980,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img-PT-d.jpg'
                        }
                        imgAlt={'Imagem do Projeto'}
                        nameProject={'Projeto'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a rutrum arcu. Aenean nec interdum tortor. Fusce lacinia sollicitudin venenatis. '}
                        technologys={['HTML', 'CSS', 'JavaScript', 'React']}
                    />
                </ul>
            </Secao>
        </main>
    );
};
export default Home;
