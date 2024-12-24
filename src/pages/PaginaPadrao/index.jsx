import Menu from 'components/Menu';
import Rodape from 'components/Rodape';
import { Outlet } from 'react-router';

const PaginaPadrao = () => {
    return (
        <main>
            <Menu />
            <Outlet />
            <Rodape />
        </main>
    );
};
export default PaginaPadrao;
