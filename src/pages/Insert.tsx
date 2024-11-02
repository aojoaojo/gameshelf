import { useContext } from "react";
import { BoardgamesContext } from "../contexts/BoardgamesContext";
import "./styles.css";
import { Topo } from '../components/topo/index'

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

export function Insert() {
    const { addGame } = useContext(BoardgamesContext);

    function insertGame() {
        const gameInput = document.getElementById("game") as HTMLTextAreaElement;
        const gameText = gameInput.value;

        try {
            // Parsea o gameText para um array de objetos JSON
            const gamesList = JSON.parse(gameText);

            if (!Array.isArray(gamesList)) {
                throw new Error("O formato do JSON deve ser uma lista de objetos.");
            }

            // Converte cada item da lista para o tipo Jogo
            const parsedGames: Jogo[] = gamesList.map((game) => ({
                nome: game.nome,
                num_jogadores_min: game.num_jogadores_min,
                num_jogadores_max: game.num_jogadores_max,
                tempo_medio_partida: game.tempo_medio_partida,
                data_lancamento: game.data_lancamento,
                fabricante: game.fabricante,
                designer: game.designer,
                categoria: game.categoria,
                idade_minima: game.idade_minima,
                dificuldade: game.dificuldade,
                classificacao: game.classificacao,
                expansoes: game.expansoes,
            }));

            // Adiciona todos os jogos ao contexto de uma vez só
            addGame(parsedGames);
            gameInput.value = "";
        } catch (error) {
            console.error("Erro ao inserir jogo. Verifique o formato do JSON. Ele deve ser uma lista de objetos.", error);
        }
    }

    return (
        <div>
            <Topo />
            <div className="bg-light fundo insert-div">

                <textarea
                    className="w-50 m-1"
                    name="game"
                    id="game"
                    cols={50}
                    rows={20}
                    placeholder={`[
                    {
                        "nome": "Catan",
                        "num_jogadores_min": 3,
                        "num_jogadores_max": 4,
                        "tempo_medio_partida": 60,
                        "data_lancamento": "1995",
                        "fabricante": "Kosmos",
                        "designer": "Klaus Teuber",
                        "categoria": "Estratégia",
                        "idade_minima": 10,
                        "dificuldade": "Médio",
                        "classificacao": 4.5,
                        "expansoes": null
                        }
]`                  }></textarea>
                <button className="w-50" onClick={insertGame}>Inserir</button>
            </div>
        </div >
    );
}
