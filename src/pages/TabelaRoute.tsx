import { useContext } from 'react';
import { Sorteio } from '../components/sorteio';
import { Tabela } from '../components/tabela';
import { Topo } from '../components/topo/index';
import { BoardgamesContext } from '../contexts/BoardgamesContext';
import './styles.css';

export function TabelaRoute() {
    const { games } = useContext(BoardgamesContext);
    return (
        <div className='fundo min-vh-100 flex-column justify-content-center'>
            <Topo />
            <div className='total-jogos'><b>Total de jogos:</b> <b>{games.length}</b></div>
            <Tabela />
            <Sorteio />
        </div>
    )
}