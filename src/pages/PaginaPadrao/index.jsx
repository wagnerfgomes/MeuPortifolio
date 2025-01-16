import Menu from 'components/Menu';
import Rodape from 'components/Rodape';
import { Outlet } from 'react-router';

const PaginaPadrao = () => {
    return (
        <>
            <header>
                <Menu standard />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Rodape />
            </footer>
        </>
    );
};
export default PaginaPadrao;
