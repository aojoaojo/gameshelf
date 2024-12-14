import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Insert } from './pages/Insert';
import { TabelaRoute } from './pages/TabelaRoute';
import { LastPlayed } from './pages/LastPlayed';

export function Router() {
    return (
        <Routes>
            <Route path="/gameshelf/" element={<Home />} />
            <Route path="/gameshelf/insert" element={<Insert />} />
            <Route path="/gameshelf/tabela" element={<TabelaRoute/>} />
            <Route path="/gameshelf/ultimos" element={<LastPlayed />} />
        </Routes>
    )
}