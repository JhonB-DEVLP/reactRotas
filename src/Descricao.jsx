import { Link } from "react-router-dom";
import './Desc.css';
import imagem from './img/imgdesc.jpg';

const Descricao = () => {
  return (
    <div>
      <header className="header">
        <div className="Title">
          <h1> Descrição </h1>
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

      <div className="descricao-ods">
        <h2>ODS 4: Educação de Qualidade</h2>
        <div className="section-container">
          <div className="section">
            <h3>Objetivo</h3>
            <p>O Objetivo de Desenvolvimento Sustentável 4 visa garantir uma educação inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.</p>
          </div>
          <div className="section">
            <h3>Importância</h3>
            <p>A educação é fundamental para o desenvolvimento humano e o progresso social. Garantir o acesso à educação de qualidade é essencial para erradicar a pobreza, promover a igualdade de gênero, melhorar a saúde e o bem-estar, e impulsionar o crescimento econômico.</p>
          </div>
          <div className="section">
            <h3>Metas</h3>
            <p>
              • Assegurar que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, levando a resultados de aprendizagem relevantes e eficazes.
             <p></p>
              • Garantir igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, incluindo a educação universitária.
             <p></p>
              • Aumentar substancialmente o número de jovens e adultos que têm habilidades relevantes, incluindo habilidades técnicas e profissionais, para emprego, trabalho decente e empreendedorismo.
             <p></p>
              • Eliminar as disparidades de gênero na educação e garantir igualdade de acesso a todos os níveis de ensino e formação profissional para os mais vulneráveis, incluindo pessoas com deficiência, povos indígenas e crianças em situações de vulnerabilidade.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Descricao;
