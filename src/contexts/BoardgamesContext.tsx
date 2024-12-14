import { createContext, ReactNode, useState, useEffect, useCallback } from "react";

interface Jogo {
    nome: string;
    num_jogadores_min: number;
    num_jogadores_max: number;
    tempo_medio_partida: number;
    data_lancamento: string;
    fabricante: string;
    designer: string | null;
    categoria: string;
    idade_minima: number;
    dificuldade: string;
    classificacao: number;
    expansoes: string | null;
}

export interface LastPlayed {
    id: number;
    nome: string;
    data: string;
}

interface BoardgamesContextProviderProps {
    children: ReactNode;
}

interface BoardgamesContextData {
    games: Jogo[];
    addGame: (game: Jogo[]) => void;
    saveGames: () => void;
    pesquisa: string;
    alteraPesquisa: (value: string) => void;
    lastPlayed: LastPlayed[];
    setLastPlayed: (game: LastPlayed[]) => void;
    removeGame: (game: Jogo) => void;
    removeGameFromLastPlayed: (gameToBeRemoved: LastPlayed) => void;
}

export const BoardgamesContext = createContext({} as BoardgamesContextData);

export function BoardgamesContextProvider({ children }: BoardgamesContextProviderProps) {
    const [games, setGames] = useState<Jogo[]>(() => {
        const savedGames = localStorage.getItem('games');
        if (savedGames) {
            return JSON.parse(savedGames);
        }
        return [];
    });

    useEffect(() => {
        const savedGames = localStorage.getItem('games');
        if (savedGames) {
            setGames(JSON.parse(savedGames));
        }
    }, []);

    const [pesquisa, setPesquisa] = useState('');

    const [lastPlayed, setLastPlayed] = useState<LastPlayed[]>(() => {
        const ultimosJogados = localStorage.getItem('lastPlayed');
        if (ultimosJogados) {
            return JSON.parse(ultimosJogados);
        }
        return [];
    });

    useEffect(() => {
        const ultimosJogados = localStorage.getItem('lastPlayed');
        if (ultimosJogados) {
            setLastPlayed(JSON.parse(ultimosJogados));
        }
    }, []);

    function alteraPesquisa(value: string) {
        setPesquisa(value);
    }

    function removeGame(game: Jogo) {
        const newGames = games.filter((g) => g.nome !== game.nome);
        setGames(newGames);
    }

    const addGame = useCallback((game: Jogo[]) => {
        const gameNames = games.map((game) => game.nome);
        game = game.filter((game) => !gameNames.includes(game.nome));
        if (game && game.length > 0) {
            try {
                if (game.length > 1) {
                    setGames([...games, ...game]);
                } else {
                    setGames([...games, game[0]]);
                }
            }
            catch (error) {
                console.error("Erro ao inserir jogo. Verifique o formato do JSON. Ele deve ser uma lista de objetos.", error);
            }
        }
    }, [games]);

    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games));
        localStorage.setItem('lastPlayed', JSON.stringify(lastPlayed));
    }, [games, lastPlayed]);

    function removeGameFromLastPlayed(gameToBeRemoved: LastPlayed) {
        if (!window.confirm('Tem certeza que deseja deletar este jogo?')) return;
        const newLastPlayed = lastPlayed.filter((game) => game.id !== gameToBeRemoved.id);
        setLastPlayed(newLastPlayed);
    }

    return (
        <BoardgamesContext.Provider value={
            {
                games,
                addGame,
                saveGames: () => localStorage.setItem('games', JSON.stringify(games)),
                pesquisa,
                alteraPesquisa,
                lastPlayed,
                setLastPlayed,
                removeGame,
                removeGameFromLastPlayed
            }}>
            {children}
        </BoardgamesContext.Provider>
    );
}
