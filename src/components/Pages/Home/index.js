import { Link } from 'react-router-dom';

import Dica from './Dica.png';
import Fundo from './Fundo.png';
import Clima from './Clima.png';
import Renda from './Renda.png';
import Distancia from './Distancia.png';

import './style.css';

function Home() {
    return (
        <div>
            <body>
            <div>
                <center>
                    <img id = "image" src = {Fundo} alt = "image"/>
                </center>
                <article id = "titulo">
                    <h1 class = "texto">Faça uma viagem inesquecível</h1>
                    <h2 class = "novidade">Planeje sua viagem conosco e não perca nenhum momento</h2>
                </article>

                <div className='container'>
                <Link to = "/tempo">
                    <div className = "card"> 
                        <article id = "teste">
                            <img id="clima" src={Clima} alt="nuvens e sol" />
                            <p>Veja a previsão do tempo do dia de onde quer que esteja</p>
                        </article>
                    </div>
                </Link>
                

                <Link to = "/conversor">
                    <div className = "card"> 
                        <article id = "teste2">
                            <img id="renda" src={Renda} alt="mão segurando uma moeda"/>
                            <p>Converta seu dinheiro e gaste com tranquilidade</p>
                        </article>
                    </div>
                </Link>

                <Link to = "/destino">
                    <div className = "card"> 
                        <article id = "teste3">
                            <img id="distancia" src={Distancia} alt="icone de mapa" />
                            <p>Venha conhecer os melhores destinos</p>
                        </article>
                            
                    </div>
                </Link>

                <Link to = "/sobre">
                    <div className = "card"> 
                        <article id = "teste4">
                            <img id="dica" src={Dica} alt="icone de hotel" />
                            <p>Saiba mais sobre a nossa empresa</p>
                        </article> 
                    </div>        
                </Link>
                </div>

            </div> 
            </body>
        </div>
    ); 
}

export default Home;