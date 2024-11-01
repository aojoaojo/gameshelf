import Bg from '../assets/bg.webp'
import { Topo } from '../components/topo/index'
import './styles.css'
export function Home() {
    return (
        <div className='h-100'>
            <Topo />
            <div className='bg-light d-flex flex-column flex-md-row'>
                <a href='/gameshelf/tabela' className='banner m-5 d-none d-md-flex'>
                    <img src={Bg} alt="" />
                </a>
                <div className='texto-home mx-auto m-4 text-center'>
                    <div>
                        <h2>Bem vindo à sua coleção de Jogos de Tabuleiro!</h2>
                        <br />
                        Esta aplicação tem a função de te ajudar a controlar,
                        organizar e auxiliar na hora de escolher os seus jogos!
                        <br />
                        <br />
                        <b className='d-none d-md-block'>Clique na imagem ao lado para ver sua tabela de jogos!</b>
                    </div>
                    <a href="/gameshelf/insert" className='btn btn-primary m-3'>Insira seus jogos!</a>
                    <a href="/gameshelf/tabela" className='btn btn-primary m-3'>Veja seus jogos!</a>
                </div>
            </div>
        </div>
    )
} 