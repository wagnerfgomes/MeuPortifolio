import Menu from 'components/Menu';
import './LinkTree.css';
import 'styles/standard.css';
import Rodape from 'components/Rodape';
import Butao from 'components/Butao';
import RedesSocias from 'components/RedesSocias';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const Linktree = () => {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main className="main-linktree">
                <section className="linktree">
                    <img
                        className="linktree__img float"
                        src="https://github.com/wagnerfgomes.png"
                        alt="Imagem de Perfil"
                    />
                    <div className="linktree__social">
                        <RedesSocias
                            url={'https://github.com/wagnerfgomes'}
                            icon={<FaGithub className="linktree-icon" />}
                        />
                        <RedesSocias
                            url={
                                'https://www.linkedin.com/in/wagnerfelipegomesferreiradev'
                            }
                            icon={<FaLinkedin className="linktree-icon" />}
                        />
                    </div>
                    <div className="linktree__content">
                        <Butao
                            full
                            icon={<MdPerson className="linktree-icon" />}
                            to={'/'}
                        >
                            Portifólio
                        </Butao>
                    </div>
                </section>
            </main>
            <Rodape />
        </>
    );
};
export default Linktree;
