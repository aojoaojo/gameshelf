import { Sorteio } from '../components/sorteio';
import { Tabela } from '../components/tabela';
import { Topo } from '../components/topo/index';
import './styles.css';

export function TabelaRoute() {
    return (
        <div className='fundo min-vh-100 flex-column justify-content-center'>
            <Topo />
            <Tabela />
            <Sorteio />
        </div>
    )
}