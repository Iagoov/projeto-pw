import { Link } from 'react-router-dom';

import './style.css';


function Header() {
    return (
        <header>
            <h1>Turistando</h1>
            <nav>
                <Link to = "/">Home</Link>
                <br/>
                <Link to = "/sobre">Sobre Nós</Link>
                <br/>
            </nav>
        </header>
    );
}

export default Header;