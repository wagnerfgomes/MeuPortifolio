import Home from 'pages/Home';
import PaginaPadrao from 'pages/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router';

//apagar depois
import './styles/mediaQuery.css';
import Sobre from 'pages/Sobre';

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<h1>Projetos</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
