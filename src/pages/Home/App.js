import icone from '../../assets/images/LogoCabeçalho.png';
import Lupa from '../../assets/images/Frame.png';
import Carro from '../../assets/images/Untitled.png';
import Barra from '../../assets/images/Untitled (2).png';
import Seta from '../../assets/images/Untitled (3).png';
import Calçados from '../../assets/images/acessórios.png';
import Mochila from '../../assets/images/mochila1.png';
import Acessório from '../../assets/images/acess.png';
import Pro from '../../assets/images/profissional.png';
import Mochilaa from '../../assets/images/mochilaa.png';
import Lanterna from '../../assets/images/lanternaaa.png';
import Jaqueta from '../../assets/images/jaqueta3.png';
import Sapato from '../../assets/images/Untitled (4).png';
import Garrafa from '../../assets/images/a.png';
import Bolsa from '../../assets/images/Untitled (5).png';
import Luva from '../../assets/images/Untitled (6).png';
import Bolsaaa from '../../assets/images/image 16.png';
import cartao from '../../assets/images/cartao.png';
import caminhao from '../../assets/images/caminhao.png';
import troca from '../../assets/images/troca.png';
import pagar from '../../assets/images/pagar.png';
import vanguard from '../../assets/images/vanguard.png';
import correio from '../../assets/images/correio.png';
import face from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import insta from '../../assets/images/insta.png';
import youtube from '../../assets/images/youtube.png';
import Formapag from '../../assets/images/bandeirascartoes.png';
import { listartodosproduto, buscarpornome } from '../../api/cadastroProduto';
import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Storage from 'local-storage'
import ScrollReveal from 'scrollreveal'
import { Link } from 'react-router-dom';



function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('')
  const [certo, setCerto] = useState('')
  const [popup, setPopup] = useState(true)
  const [aparecer, setAparecer] = useState(false)
  const [usuario, setUsuario] = useState('-')
  const [produto, setProduto] = useState([])
  

  async function carregartodosproduto () {
    const resp = await listartodosproduto()
    setProduto(resp)

  }

  useEffect(() => {
    
  }, [])
  
  async function Suporte() {
    try {

      const s = await axios.post('http://129.148.42.252:5015/Suportehome', {
        nome: nome,
        telefone: telefone,
        email: email,
        mensagem: mensagem


      })

      setCerto('Enviado para o suporte com sucesso')
      setErro('');



    } catch (err) {
      if (err.response.status === 404) {
        setErro(err.response.data.erro)
      }
    }
  }

  function scrollToQuemSomos() {
    const quemSomosSection = document.getElementById("quemSomos");
    if (quemSomosSection) {
      window.scrollTo({
        behavior: "smooth",
        top: quemSomosSection.offsetTop
      });
    }
  }

 const fecharpup =  () => {
    setPopup(false)
 }

//  useEffect(() => {
//   const valorarmazenado = Storage('user-logado')
  
//   setAparecer(!valorarmazenado)

// })

//   useEffect (() => {
//     const user = Storage('user-logado')
//     setUsuario(user.data.nome)
//   },[])


  return (
    <div className="App">
      <div className='parte-inicial'>
        <div className='cabecalho'>
          <a href='/'> <img src={icone} /> </a> 
          <div className='alinhamento'>
            <img id='Lupa' src={Lupa} alt='Lupa' />  <input type='text' placeholder='Pesquisar...' />
          </div>
          <div className='links'>
            <a href=''>Fale conosco</a>
            <a href='/login' >Entrar</a>
            <a href='/cadastro'>Cadastrar</a>
          </div>
          <img src={Carro} />

        </div>

        <div className='cabecalho2'>
          <div id='login-user'>{usuario[0]} </div>
          <div id='nome'>{usuario}</div>
          <p>Todas as Categorias</p>
          <img src={Seta} />

          <div class='lista'>
            <nav>
              <ul>
                <li class='dropdown'>

                  <ul class='dropdown-menu'>
                    <li>Camiseta</li>


                    <li>Boné</li>
                  </ul>
                </li>
                <Link style={{textDecoration:"none"}} to="/destaques">
                  <a>Vestuario</a>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/mochilas">
                  <span>Mochilas</span>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/Calçados">
                  <span>Calçados</span>
                </Link>
                <Link  id='linha-redirecionada'style={{textDecoration:"none"}} to="/Profissional">
                  <span>Profissional</span>
                </Link>
                <Link id='linha-redirecionada' style={{textDecoration:"none"}} to="/Acessórios">
                  <span>Acessórios</span>
                </Link>

              </ul>
            </nav>

          </div>
        </div>
          
          { aparecer && popup && ( 
        <div className='popup'>
      <button onClick={fecharpup} id='close'>&times;</button>
      <h1>Não possui Cadastro?</h1>
      <p>faça ele Agora clicando no botão abaixo</p>
      <a href='/cadastro'>CADASTRO</a>
    </div>
     )}
     
        <div className='Centro'>
          <h1>Equipamentos de Elite para Aventura e Sobrevivência</h1>
          <Link to="quemSomos" smooth={true} duration={500}></Link>
          <button onClick={scrollToQuemSomos}>Conheça</button>
        </div>
      </div>
     
      
      <div className='fundo'>
        <div className='pagina-segunda'>

          <h1 className='maisprocurado'>Mais Procurados</h1>
          <div className='procurado'>
            <div className='procurado1'>
              <img src={Sapato} />
              <div className='procurado1-2'>
                <h1>Bota Impermeável Timberland</h1>
                <p>R$39.99</p>
                <div className='procurado1-2-novo'>
                <p>Por apenas R$ 39.99 </p>
                <p>Desconto de até 5% no PIX</p>
                {/* <button>Comprar</button> */}
                </div>
                
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

            <h1>Catálogo</h1>
            <div className='faixaa'>
              <div className='faixa-02'>

                <a href='/mochilas'> <img src={Mochila} /> </a>
                <h1>Mochilas</h1>

               <a href='/acessórios'>  <img src={Acessório}></img> </a>
                <h2>Acessorio</h2>

              </div>

              <div className='faixa-03'>

               <a href='/calçados'>  <img src={Calçados}></img> </a>
                <h1>Calçados</h1>

              <a href='/profissional'>    <img src={Pro}></img> </a> 
                <h2>Profissional</h2>

              
              </div>
            </div>
            <div className='faixa-button'>
              <a></a> <button>Ver Mais</button>
            </div>
          </div>
        </div>


      </div>


      


    


      <div className='fundo2'>
        <div id='quemSomos' className='baixo'>
          <h1 >Quem somos</h1>
          <p>Somos apaixonados por fornecer os melhores equipamentos e soluções para aqueles que buscam aventuras sobrevivência e preparação tática.Nossa empresa nasceu do desejo de fornecer equipamentos de qualidade para pessoas que valorizam a segurança, a confiabilidade e excelência em todas as suas expêriencias ao ar livre. Com uma equipe especializada e dedicada, selecionamos cuidadosamente os melhores produtos de marcas renomadas, garantindo que voçê tenha acesso aos equipamentos mais avançados e funcionais do mercado. Seja voçê um aventureiro, um entusiasta de esportes ao ar livre ou um profissional em busca de equipamentos confiáveis, estamos aqui para atender suas necessidades e superar suas expectativas.Junte-se à nossa comunidade de exploradores e conte conosco para equipá-lo com tudo o que voçê precisa para enfrentar qualquer desafio com segurança.</p>

          <a href='/saiba'> <button >Saiba mais</button> </a>  
        </div>
      </div>
      <div className='infopess'>
        <div className='rodape2'>
          <h1>FALE CONOSCO</h1>
          <p>Estamos ansiosos para ouvir de você! Envie-nos quaisquer perguntas que você tiver</p>

        </div>

        <div className='alinhamento-home'>
          <div className='rodape3'>
            <div className='RODAPE3-1'>
              <p>Nome</p>
              <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className='telefone-home'>
              <p2>Telefone</p2>
              <input type='number' value={telefone} onChange={e => setTelefone(e.target.value)} />
            </div>
          </div>

          <div className='alinhamento2-home'>
            <div className='rodape4-home'>
              <p>Email</p>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className='rodape5'>
              <p>Mensagem</p>
              <input type='text' value={mensagem} onChange={e => setMensagem(e.target.value)} />
            </div>
          </div>

          <div className='rodape6'>
            <button onClick={Suporte}>Enviar</button>
            <div id='erro-home'>{erro}</div>
            <div id='enviado'>{certo}</div>
          </div>
        </div>
      </div>







      <div className='cabecario'>

        <h3>10% De desconto no boleto ou no pix</h3>
        <img src={cartao} />
        <h4>6x Sem juros no cartão de credito</h4>
        <img src={caminhao} />
        <h5>Entrega Em Todo O Brasil </h5>
        <img src={troca} />
        <h6>1ª Troca grátis a primeira troca é por nossa conta </h6>

      </div>
      <div className='pagamento'>
        <img src={Formapag} />
      </div>





      <div className='rodape-home'>
      <a href='/'>
        <img src={vanguard} />
      </a>
        <img src={correio} />
        <Link to="https://www.facebook.com">
        <img src={face} />
        </Link>
        <Link to="https://twitter.com/"> 
        <img src={twitter} />
        </Link>
        <Link to="https://www.instagram.com/">
        <img src={insta} />
        </Link>
        <Link to="https://www.youtube.com/">
        <img src={youtube} />
        </Link>


        <div className='elements'>
          <p>+012 345 6789</p>
          <p>sac@vanguardtactical.com</p>
          <p>Avenida Coronel Octaviano de Freitas Costa, 69, Socorro, São Paulo</p>

        </div>

      </div>
      {/* rodapé arrumado/feito */}

    </div>
  );
}

export default App;
