import { Link } from "react-router-dom";
import './Home.css';
import imagem from './img/ImgHome.jpg'; // Importe sua imagem aqui

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="title">
          <h1>Início</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Descricao">Descrição da ODS</Link>
            </li>
            <li>
              <Link to="/Perfil">Sobre Mim</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="content-container"> {/* Novo contêiner para imagem e texto */}
        <div className="container">
          <img src={imagem} alt="Descrição da imagem" className="imagem" />
        </div>
        <div className="texto-sobre-imagem">
          <h2>Bem vindo a página sobre ODS</h2>
          <p>Projeto react routes</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
