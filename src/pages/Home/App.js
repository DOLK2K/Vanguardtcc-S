import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Calçados from '../../assets/images/acessórios.png'
import Mochila from '../../assets/images/mochila1.png'
import Acessório from '../../assets/images/acess.png'
import Pro from '../../assets/images/profissional.png'
import Mochilaa from '../../assets/images/mochilaa.png'
import Lanterna from '../../assets/images/lanternaaa.png'
import Jaqueta from '../../assets/images/jaquetaaa-removebg-preview.png'
import Sapato from '../../assets/images/Untitled (4).png'
import Garrafa from '../../assets/images/a.png'
import Bolsa from '../../assets/images/Untitled (5).png'
import Luva from '../../assets/images/Untitled (6).png'
import Bolsaaa from '../../assets/images/image 16.png'
import fundo4 from '../../assets/images/Rectangle 4.png'
import './index.scss'

function App() {
  return (
    <div className="App">
      <div className='parte-inicial'>
      <div className='cabecalho'>
        <img src={icone} />
        <div className='alinhamento'>
        <img id='Lupa' src={Lupa} alt='Lupa'  />  <input type='text' placeholder='Pesquisar...'  />
        </div>
        <div className='links'>
        <a href=''>Fale conosco</a>
        <a href='/login' >Entrar</a>
        <a href='/cadastro'>Cadastrar</a>
        </div>
        <img src={Carro} />
        
        </div> 

        <div className='cabecalho2'>
          <img src={Barra} />
          <p>Todas as Categorias</p>
          <img src={Seta} />

          <div className='lista'>
          <a id='Vestuario'>Vestuario</a>
          <a>Mochilas</a>
          <a>Calçados</a>
          <a>Profissional</a>
          <a>Acessórios</a>
          </div>
          </div>  

          <div className='Centro'>
            <h1>Equipamentos de Elite para Aventura e Sobrevivência</h1>
            <button>Conheça</button>
            </div>   
        </div>        
        <div className='fundo'>
        <div className='pagina-segunda'>
          <h1 className='maisprocurado'>Mais Procurados</h1>

          <div className='procurado'>
            <div className='procurado1'>
              <img src={Sapato} />
                <div className='procurado1-2'>
                <h1>Bota Impermeável Timberland PRO</h1>
                <p>R$39.99</p>
                <button className='botaoo'>Comprar</button>
                </div>

                
            </div>

            <div className='procurado2'>
              <img src={Garrafa} />
                <div className='procurado2-3'>
                <h1>Garrafa Térmica CamelBak</h1>
                <p>R$29.99</p>
                <button className='botaoo'>Comprar</button>
                </div>

                
            </div>

            <div className='procurado3'>
              <img src={Bolsa} />
                <div className='procurado3-4'>
                <h1>Mochila Tática Hardland 30L</h1>
                <p>R$15.99</p>
                <button className='botaoo'>Comprar</button>
                </div>

                
            </div>

            <div className='procurado4'>
              <img src={Luva} />
                <div className='procurado4-5'>
                <h1>Luva Teek Preta</h1>
                <p>R$35.99</p>
                <button className='botaoo'>Comprar</button>
                </div>

                
            </div>
          </div>
          </div> 
          <div>
            <div>
              <img src='' />
            </div>

              <div className='slc'>
          
                <h1>Catálogoo</h1>
            <div className='faixaa'>
            <div className='faixa-02'>

                <img src={Mochila}/>
                <h1>Mochilas</h1>

                <img src={Acessório}></img>
                <h2>Acessorio</h2>

            </div>

            <div className='faixa-03'>

                <img src={Calçados}></img>
                <h1>Calçados</h1>

                <img src={Pro}></img>
                <h2>Profissional</h2>
           

            </div>
            </div>
              <div className='faixa-button'>
                <button>Ver Mais</button>
              </div>
              </div>
              </div>
  

          </div>
          
          {/* <div className='promocoes'>
            <h1>PROMOÇÕES</h1>
            <div className='faixa04'>
              <div className='bolsa'>
                <img src={Bolsaaa} />
                <div className='abaixo'>
                  <h1>Mochila Militar Wolf Cargo Double Black Cordura 1000d Zíper Ykk®</h1>
                  <div className='abaixo2'>
                    <p>de 700,00$rs</p>
                    <p>por r$500,00</p>
                  </div>
                  <p>8x R$62,50</p>
                  <button>Comprar</button>
                </div>
              </div>

              <div className='lanterna'>
                <img src={Lanterna} />
                <div className='abaixo'>
                  <h1>Lanterna Jetbeam Bc25 1480 Lúmens</h1>
                  <div className='abaixo2'>
                    <p>de 450$rs</p>
                    <p>por r$300,00</p>
                  </div>
                  <p>5x 60,00</p>
                  <button>Comprar</button>
                </div>
              </div>

              <div className='jaqueta'>
                <img src={Jaqueta} />
                <div className='abaixo'>
                  <h1>JAQUETA MILITAR IMPERMEÁVEL</h1>
                  <div className='abaixo2'>
                    <p>de 584,99$rs</p>
                    <p>por r$497,00</p>
                  </div>
                  <p>12x 51,24</p>
                  <button>Comprar</button>
                </div>
              </div>
            </div>
          </div> */}

          <div className='fundo2'>
          <div className='baixo'>
            <h1>Quem somos</h1>
            <p>SOMOS APAIXONADOS POR FORNECER OS MELHORES EQUIPAMENTOS E SOLUÇÕES PARA AQUELES QUE BUSCAM AVENTURAS, SOBREVIVÊNCIA E PREPARAÇÃO TÁTICA. nOSSA EMPRESA NASCEU DO DESEJO DE FORNECER ARTIGOS DE QUALIDADE PARA PESSOAS QUE VALORIZAM A SEGURANÇA, A CONFIABILIDADE E EXCELÊNCIA EM TODAS AS SUAS EXPERIÊNCIAS AO AR LIVRE. cOM UMA EQUIPE ESPECIALIZADA E DEDICADA, SELECIONAMOS CUIDADOSAMENTE OS MELHORES PRODUTOS DE MARCAS RENOMADAS, GARANTINDO QUE VOCÊ TENHA ACESSO AOS EQUIPAMENTOS MAIS AVANÇADOS E FUNCIONAIS DO MERCADO. seja você um aventureiro, um entusiasta de esportes ao ar livre ou um profissional em busca de equipamentos confiáveis, estamos aqui para atender suas necessidades e superar suas expectativas. junte-se à nossa comunidade de exploradores e conte conosco para equipá-lo com tudo o que você precisa para enfrentar qualquer desafio com segurança.</p>

            <button>Saiba mais</button>
          </div>
          </div>
          <div className='infopess'>
          <div className='rodape2'>
            <h1>FALE CONOSCO</h1>
            <p>Estamos ansiosos para ouvir de você! Envie-nos quaisquer perguntas que você tiver</p>

          </div>

          <div className='rodape3'>
            <p>Nome</p>
            <p2>Telefone</p2>

          </div>

          <div className='rodape4'>
            <p>Email</p>
          </div>

          <div className='rodape5'>
            <p>Mensagem</p>
          </div>

          <div className='rodape6'>
            <button>Enviar</button>
          </div>
       </div>
       





        
        <div className='cabecario'>
        <div className='alinhamento2'>
        <h1>10% de desconto no boleto ou no pix</h1>
        <img src={cartao} />
        <h2>6x sem juros no cartão de credito</h2>
        <img src={caminhao} />
        <h3>ENTREGA EM TODO O BRASIL ENTREGA EM TODO O BRASIL</h3>
        <img src={troca} />
        <h4>1ª TROCA GRÁTIS a primeira troca é por nossa conta </h4>

        <img src={pagar} />
        </div>
        </div>
       </div>
  );
}

export default App;
