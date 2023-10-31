import React from 'react';
import './App.css';

function Apdp() {
  // Função para rolar suavemente para a seção de destino
  function scrollToQuemSomos() {
    const quemSomosSection = document.getElementById("quemSomos");
    if (quemSomosSection) {
      window.scrollTo({
        behavior: "smooth",
        top: quemSomosSection.offsetTop
      });
    }
  }

  return (
    <div className="App">
      <div className="parte-inicial">
        <div className="cabecalho">
          {/* Conteúdo do cabeçalho */}
        </div>

        <div className="Centro">
          <h1>Equipamentos de Elite para Aventura e Sobrevivência</h1>
          <button onClick={scrollToQuemSomos}>Conheça</button>
        </div>

        <div className="fundo">
          <div className="pagina-segunda">
            {/* Conteúdo da página */}
          </div>
        </div>

        <div className="fundo2">
          <div id="quemSomos">
            <h1>Quem somos</h1>
            {/* Conteúdo da seção "Quem somos" */}
          </div>
        </div>

        {/* Outros elementos do seu aplicativo */}
      </div>
    </div>
  );
}

export default Apdp;