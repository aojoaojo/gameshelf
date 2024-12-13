import { useContext, useEffect } from "react";
import { BoardgamesContext } from "../../contexts/BoardgamesContext";
import "./styles.css";

export function BarraDePesquisa() {

    const { alteraPesquisa } = useContext(BoardgamesContext);

    useEffect(() => {
        const input = document.getElementById("pesquisa") as HTMLInputElement;
        input.addEventListener("input", () => {
            const value = input.value;
            alteraPesquisa(value);
        });
    });

    return (
        <div>
            <input type="text"
                name="pesquisa"
                id="pesquisa"
                className="pesquisa form-control"
                placeholder="Pesquisar jogo"
                autoFocus={true}
            />
        </div>
    )
}