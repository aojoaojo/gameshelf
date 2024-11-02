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

interface BoardgamesContextProviderProps {
    children: ReactNode;
}

interface BoardgamesContextData {
    games: Jogo[];
    addGame: (game: Jogo[]) => void;
    saveGames: () => void;
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
    }, [games]);

    return (
        <BoardgamesContext.Provider value={{ games, addGame, saveGames: () => localStorage.setItem('games', JSON.stringify(games)) }}>
            {children}
        </BoardgamesContext.Provider>
    );
}
