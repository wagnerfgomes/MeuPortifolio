import Home from 'pages/Home';
import PaginaPadrao from 'pages/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='/sobre' element={<h1>Sobre</h1>} />
                    <Route path='/projetos' element={<h1>Projetos</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
