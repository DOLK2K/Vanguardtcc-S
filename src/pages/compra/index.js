import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import User2 from '../../assets/images/user2.png'
import Comprasss from '../../assets/images/comprinhass.png'
import Carrinhoverde from '../../assets/images/carrinhoverde.png'
import Linha from '../../assets/images/linha.png'
import Estrela from '../../assets/images/estrela.png'
import Oculos from '../../assets/images/oclinhos.png'
import Camisa from '../../assets/images/camiseta.png'
import Assault from '../../assets/images/mochilaa.png'
import Usuario from '../../assets/images/usuario3.png'

import './index.scss'


// nao usar position-relative/absolute desnecessariamente, vai atralhar a responsividade
// nao usar padding desnecessariamente, com proporção muito alta
// tem coisas q não está igual no figma, e não está alinhado direito


export default function Compra() {
  return (
<div className='globamento'>
<div className="App">
      <div className='parte-inicial1'>
      <div className='cabecalho1'>
        <img src={icone} />
        <div className='alinhamento2'>
        <img id='Lupa' src={Lupa} alt='Lupa'  />  <input type='text' placeholder='Pesquisar...'  />
        </div>
        <div className='links'>
        <a href=''>Fale conosco</a>
        <a href='/login' >Entrar</a>
        <a href='/cadastro'>Cadastrar</a>
        </div>
        <img src={Carro} />
        
        </div> 

        <div className='cabecalho22'>
          <img src={Barra} />
          <p>Todas as Categorias</p>
          <img src={Seta} />

          <div className='lista1'>
          <a id='Vestuario'>Vestuario</a>
          <a>Mochilas</a>
          <a>Calçados</a>
          <a>Profissional</a>
          <a>Acessórios</a>
          </div>  
          </div>  

          <div className='tudo'>
          <div className='primeira'>
            

            <img src={Usuario} />

            <h1>Usuário</h1>

          </div>

          

          
          </div>

          <div className='segunda'>
            <img src ={User2} />
            <h1>Minha Conta</h1>

          </div>


          <div className='opcoes'>
        
          <div className='segunda2'>
          <img src ={Comprasss} />
            <h3>Minhas Compras</h3>
          </div>

          
          <div className='terceira'>
            <h1>TODOS</h1>
            <h3>A PAGAR</h3>
            <h4>PREPARANDO</h4>
            <h5>A CAMINHO</h5>
            <h6>FINALIZADO</h6>



          </div>

          


          </div>


          <div className='produtos'>

          <div className='produto1'>
            <h1>VANGUARD</h1>
            <img src={Carrinhoverde} />
            <h3>PEDIDO ENTREGUE</h3>
          </div>

          <div className='linha'>
            <img src = {Linha}/>
          </div>

        <div className='cinza'>
          <img src = {Oculos} />
          <h1>Óculos Tático Echo Laranja Evo</h1>
          <h3>R$:137,94</h3>
        </div>

        <div className='linha1'>
            <img src = {Linha}/>
          </div>

        <div className='precopedido'>
          <h1>Total do Pedido:R$137,94</h1>
        </div>

        <div className='star'>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <button>Comprar Novamente</button>
        </div>

        </div>







        <div className='produtos1'>

          <div className='produto11'>
            <h1>VANGUARD</h1>
            <img src={Carrinhoverde} />
            <h3>PEDIDO ENTREGUE</h3>
          </div>

          <div className='linha1'>
            <img src = {Linha}/>
          </div>

        <div className='cinza1'>
          <img src = {Assault} />
          <h1>MOCHILA TÁTICA ASSAULT</h1>
          <h3>R$:389,90</h3>
        </div>

        <div className='linha11'>
            <img src = {Linha}/>
          </div>

        <div className='precopedido1'>
          <h1>Total do Pedido:R$389,90</h1>
        </div>

        <div className='star1'>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>

          <button>Comprar Novamente</button>

        </div>


        </div>
<div className='produtos2'>

          <div className='produto12'>
            <h1>VANGUARD</h1>
            <img src={Carrinhoverde} />
            <h3>PEDIDO ENTREGUE</h3>
          </div>

          <div className='linha2'>
            <img src = {Linha}/>
          </div>

        <div className='cinza2'>
          <img src = {Camisa} />
          <h1>Camiseta Soldier - Camuflado Tropic</h1>
          <h3>R$:52,51</h3>
        </div>

        <div className='linha12'>
            <img src = {Linha}/>
          </div>

        <div className='precopedido2'>
          <h1>Total do Pedido:R$52,51</h1>
        </div>

        <div className='star2'>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <img src= {Estrela}/>
          <button>Comprar Novamente</button>
        </div>

        </div>


          



        </div>
        </div>
        </div>          
  );
}