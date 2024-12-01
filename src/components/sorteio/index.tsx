import { useContext, useState } from "react";
import { BoardgamesContext } from "../../contexts/BoardgamesContext";
import { Jogo } from "../tabela";
import "./styles.css";

export function Sorteio() {
  const { games } = useContext(BoardgamesContext);
  const numPlayers = document.getElementById("numPlayers") as HTMLInputElement;
  const [sorteio, setSorteio] = useState<Jogo[]>([]);
  const [sorteioRealizado, setSorteioRealizado] = useState<boolean>(false);

  function sortear() {
    const gamesFiltered = games.filter(
      (game) => game.num_jogadores_max >= Number(numPlayers.value)
    );
    const sorteio =
      gamesFiltered[Math.floor(Math.random() * gamesFiltered.length)];
    setSorteio([sorteio]);
    setSorteioRealizado(true);
  }

  return (
    <div className="wrappersort">
      <h1>Escolha um Jogo aleatóriamente</h1>
      <div className="sorteio flex-row mb-3">
        <input
          id="numPlayers"
          name="numPlayers"
          className="d-flex flex-fill"
          placeholder="Número de jogadores que irão jogar"
        ></input>
        <button className="btn btn-primary" onClick={sortear}>
          Sortear
        </button>
      </div>
      {sorteioRealizado && (
        <div className="sorteio-realizado">
          <h2> {sorteio[0].nome} </h2>
          <p>Número máximo de jogadores: {sorteio[0].num_jogadores_max}</p>
        </div>
      )}
    </div>
  );
}
