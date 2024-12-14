import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { Topo } from '../components/topo/index';
import type { LastPlayed } from '../contexts/BoardgamesContext';
import { BoardgamesContext } from '../contexts/BoardgamesContext';
import './styles.css';

export function LastPlayed() {
    const { games, lastPlayed, setLastPlayed, removeGameFromLastPlayed } = useContext(BoardgamesContext);

    function addLastPlayed() {
        const lastGame = document.getElementById('last-game') as HTMLInputElement;
        const lastGameDate = document.getElementById('last-game-date') as HTMLInputElement;

        if (!lastGame.value || !lastGameDate.value) {
            return;
        }

        const newLastGame: LastPlayed = {
            id: lastPlayed.length + 1,
            nome: lastGame.value,
            data: lastGameDate.value
        }

        setLastPlayed([...lastPlayed, newLastGame]);
        lastGame.value = '';
        lastGameDate.value = '';
    }

    function removeGame(game: LastPlayed) {
        removeGameFromLastPlayed(game);
    }

    function getCurrentDate() {
        const curr = new Date();
        const day = curr.getDate();
        const month = curr.getMonth() + 1;
        const year = curr.getFullYear();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }

    return (
        <div className='fundo min-vh-100 flex-column justify-content-center'>
            <Topo />
            <div className='d-flex m-3 column-gap-3'>
                <select
                    className='form-select select-game'
                    name="game"
                    id="last-game"
                    required
                >
                    {games.map((game, index) => (
                        <option key={index} value={game.nome}>{game.nome}</option>
                    ))}
                </select>
                <input
                    defaultValue={getCurrentDate()}
                    className='form-select select-game'
                    type="date"
                    id='last-game-date'
                    required
                />
                <button
                    className='btn bt-home'
                    onClick={addLastPlayed}
                >Adicionar</button>
            </div>
            <div className='wrapper overflow-y-scroll'>
                <table className='table table-bordered text-center align-middle table-fixed'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastPlayed.map((game, index) => (
                            <tr key={index}>
                                <td>{game.nome}</td>
                                <td>{game.data}</td>
                                <td><button className='btn bt-excluir' onClick={() => removeGame(game)}><Trash /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}