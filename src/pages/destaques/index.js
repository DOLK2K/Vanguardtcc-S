
import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'

import './index.scss';


export default function Destaques() {
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

    </div> 
    </div> 
    </div> 

    )
}