import Home from 'pages/Home';
import PaginaPadrao from 'pages/PaginaPadrao';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Sobre from 'pages/Sobre';
import Linktree from 'pages/LinkTree';

//apagar depois
import './styles/mediaQuery.css';
//

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<h1>Projetos</h1>} />
                </Route>
                <Route path='linktree' element={<Linktree />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
