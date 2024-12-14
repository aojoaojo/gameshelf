import Bg from '../assets/bg.webp'
import { Topo } from '../components/topo/index'
import { ExportarPorClipboard } from '../components/exportarPorClipBoard/index'
import { ExportarPorArquivoTxt } from '../components/exportarPorArquivo/index'
import './styles.css'
import { Copy } from 'phosphor-react'
import Dropdown from 'react-bootstrap/Dropdown';

export function Home() {
    return (
        <div className='h-100'>
            <Topo />
            <div className='bg-light d-flex flex-column flex-md-row'>
                <a href='/gameshelf/tabela' className='banner m-5 d-none d-md-flex'>
                    <img className='home-img' src={Bg} alt="imagem gerada por AI mostrando coisas icônicas de boardgames" title='Ir para a estante de jogos' />
                </a>
                <div className='texto-home mx-auto m-4 text-center'>
                    <div>
                        <h2>Bem vindo à sua coleção de Jogos de Tabuleiro!</h2>
                        <br />
                        Esta aplicação tem a função de te ajudar a controlar,
                        organizar e auxiliar na hora de escolher os seus jogos!
                        <br />
                        <br />
                        O seu acervo de jogos de tabuleiro ficará salvo no seu navegador.
                        <br />
                        Então, caso você limpe o cache ou esteja em outro dispostivo não terá acesso aos seus jogos.
                        <br />
                        <br />
                        Mas isso não te impede de inserir seus jogos novamente em outros dispositivos!
                        <br />
                        Posteriormente será implementado um sistema de login para salvar seus jogos na nuvem.
                        <br />
                        <br />
                        Para facilitar a inserção, foi criado um prompt no chatgpt para te ajudar a coletar os dados dos seus jogos e,
                        <br />
                        portanto, alguns dados podem ser inverídicos.
                        <br />
                        <br />
                        <b className='d-none d-md-block'>Clique na imagem ao lado para ver sua tabela de jogos!</b>
                    </div>
                    <a href="/gameshelf/insert" className='btn m-3 bt-home'>Insira seus jogos!</a>
                    <a href="/gameshelf/tabela" className='btn m-3 bt-home'>Veja seus jogos!</a>
                    <a href="/gameshelf/ultimos" className='btn m-3 bt-home'>Ultimos jogados!</a>
                    <Dropdown className=''>
                        <Dropdown.Toggle id="dropdown-basic" className='btn bt-home'>
                            Exportar
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={ExportarPorClipboard}>Exportar por cópia <Copy /></Dropdown.Item>
                            <Dropdown.Item onClick={ExportarPorArquivoTxt}>Exportar por arquivo</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
} 