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
      (game) => game.num_jogadores_max >= Number(numPlayers.value) && game.num_jogadores_min <= Number(numPlayers.value)
    );
    const sorteio =
      gamesFiltered[Math.floor(Math.random() * gamesFiltered.length)];
    setSorteio([sorteio]);
    if (sorteio === undefined){
      alert("Não há jogos disponíveis para o número de jogadores informado")
      return;
    }
    else{
      setSorteioRealizado(true);
    }
  }

  return (
    <div className="wrappersort">
      <h1>Sorteie um jogo</h1>
      <div className="sorteio flex-row mb-3">
        <input
          id="numPlayers"
          name="numPlayers"
          className="d-flex flex-fill input-home"
          placeholder="Número de jogadores"
          type="number"
          min="1"
          max="20"
          autoComplete="off"
        ></input>
        <button className="btn bt-home" onClick={sortear}>
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
