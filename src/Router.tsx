import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Insert } from './pages/Insert';
import { TabelaRoute } from './pages/TabelaRoute';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/tabela" element={<TabelaRoute/>} />
        </Routes>
    )
}