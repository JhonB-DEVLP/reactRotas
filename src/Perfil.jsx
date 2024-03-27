import { Link } from "react-router-dom";
import './Perfil.css';
import imagem from './img/imgperfil.jpg';
import img from './img/imagemjhon.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Perfil = () => {
  return (
    <div className="background-image">
      <header className="header"> {/* Adiciona a classe 'header' ao header */}
        <div className="Title"> {/* Adiciona a classe 'Title' à div do título */}
          <h1> Meu perfil </h1>
        </div>

        <div>
          <ul className='links'>
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
        <section class="sobre section" id="sobre">
          <div class="sobre__container container grid">
            <div class="sobre__content">
              <div class="box1">
                <img src={img} alt="Imagem minha" className="img" />
              </div>

              <div class="box2">
                <h2 class="section__titulo"> Sobre mim </h2>

                <p class="sobre__descricao"> Olá, eu sou um estudante entusiasmado pelo universo da programação.
                  Eu cursando sistemas para internet na UNICAP, oportunidade oferecida pelo programa embarque digital.
                  Sou um desenvolvedor em formação e com habilidades sólidas em HTML5, CSS3, JavaScript,
                  Java, Python, banco de dados e versionamento por Git e GitHub.
                  Acredito que o aprendizado contínuo é fundamental em um campo dinâmico como a tecnologia,
                  adoro ser comunicativo com todos ao meu redor e principalmente quando o assunto é conversar
                  sobre as infinitas possibilidades que existem nesse mundo dos códigos. Aqui, estou registrando vários projetos que fazem
                  parte do meu processo de aprendizagem no dia a dia.
                  <br />
                  <br />
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/jhonesbonifaciodasilva/">Linkedin</a>
                  
                  <br></br>
                  <br></br>

                  <FaGithub />
                  <a href="https://github.com/JhonB-DEVLP">Github</a>
                  <br></br>
                  <br></br>

                  <IoLogoVercel />
                  <a href="https://portifolio-jhones-bonifacio.vercel.app/">Portifólio</a>
                  <br></br>

                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Perfil;
