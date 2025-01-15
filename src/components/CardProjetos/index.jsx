import Butao from 'components/Butao';
import './CardProjetos.css';
import 'styles/standard.css';
import 'styles/hover.css';
import { MdOutlineVisibility } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import LinkExterno from 'components/LinkExterno';

const CardPorjetos = ({
    imgUrl,
    imgAlt,
    nameProject,
    description,
    technologys,
    deployLink,
    codeLink,
}) => {
    return (
        <li className="cardProjects">
            <img
                className="cardProjects__img float"
                src={imgUrl}
                alt={imgAlt}
            />
            <div className="cardProjects__content">
                <p className="cardProjects__hightlight bold">
                    Projeto em destaque
                </p>
                <h6 className="cardProjects__name">{nameProject}</h6>
                <p className="cardProjects__description">{description}</p>
                <ul className="cardProjects__list-technology">
                    {technologys.map((technology) => (
                        <li key={technology} className="cardProjects__technology body-2">
                            {technology}
                        </li>
                    ))}
                </ul>
                <div className="cardProjects__links">
                    <div className="cardProjects__buttons">
                        <Butao
                            icon={
                                <MdOutlineVisibility className="cardProjects__buttons__icon icon-button" />
                            }
                            to={deployLink}
                        >
                            Deploy
                        </Butao>
                        <Butao
                            icon={
                                <FaGithub className="cardProjects__buttons__icon icon-button" />
                            }
                            to={codeLink}
                        >
                            Código
                        </Butao>
                    </div>
                    <LinkExterno to={'/'}>Ler mais</LinkExterno>
                </div>
            </div>
        </li>
    );
};
export default CardPorjetos;
