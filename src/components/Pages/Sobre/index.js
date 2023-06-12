import './style.css';
import Paris from './Paris.jpeg';

function Sobre() {
    return (
        <div>
            <center>
                <body id = "sobre">
                    <h1 id = "title">Sobre Nós</h1>
                    <div id = "txt" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
                        <p>
                           Começamos nossa trajetória em 2022 para atender uma necessidade do mercado de turismo.
                           Nosso objetivo é tornar a experiência de viagem ainda mais incrível, oferecendo aos usuários todas as informações fundamentais em um só lugar.
                           Acreditamos que a praticidade e a informação são essenciais para tornar a viagem ainda mais especial e estamos dedicados a fornecer isso a todos os nossos usuários.
                        </p>
                        <div className="quote">
                            <p>"Tudo o que você precisa na palma da sua mão."</p>
                        </div>
                    </div>

                    <div id = "photo">
                        <img id = "torre"src = {Paris}/>
                    </div>
                    
                </body>
                
            </center>
        </div>
    );
}

export default Sobre;