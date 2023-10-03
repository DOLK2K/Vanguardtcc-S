import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Calçados from '../../assets/images/acessórios.png'
import Mochila from '../../assets/images/mochila1.png'
import Acessório from '../../assets/images/acess.png'

import User2 from '../../assets/images/user2.png'


import './index.scss'

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
            
            <h1>Usuário</h1>

          </div>

          

          <div className='terceira'>
            <h1>TODOS</h1>
            <h3>A PAGAR</h3>
            <h4>PREPARANDO</h4>
            <h5>A CAMINHO</h5>
            <h6>FINALIZADO</h6>



          </div>
          </div>

          <div className='segunda'>
            <img src ={User2} />
            <h1>Minha Conta</h1>

          </div>

          



        </div>
        </div>
        </div>          
  );
}