import icone from '../../assets/images/LogoCabeçalho.png';
import Lupa from '../../assets/images/Frame.png';
import Carro from '../../assets/images/Untitled.png';
import Barra from '../../assets/images/Untitled (2).png';
import Seta from '../../assets/images/Untitled (3).png';
import Edit from '../../assets/images/editusuario.png'
import Email from '../../assets/images/editemail.png'
import Telefone from '../../assets/images/edittelefone.png'
import Cpf from '../../assets/images/editcpf.png'
import './index.scss'

export default function Minhaconta(){

return (
    <div className='parte-inicial3'>
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
         

  
     <div className='infopess3'>
        <div className='rodape22'>
          <h1>Minha Conta</h1>
          <p>Olá! Seja Bem Vindo !</p>

        </div>

        <div className='alinhamento-home1'>
          <div className='rodape33'>
            <div className='RODAPE33-1'>
              <p>Meus dados</p>  
            </div>
          </div>
          <div className='linhhhas'>
          <hr />
          </div>
            <div className='rodape55'>
              <p>Meus pedidos</p>
              
            </div>
          <div className='linhhhas1'>
          <hr />
          </div>
          <div className='leave'> 
          <p>Sair</p>
          </div>
          <div className='linhhhas2'>
          <hr />
          </div>
          </div>

          <div className='editcliente'>
          <img src={Edit} />
          <p>Nome: Cliente </p>
          <h1>editar</h1>
          </div>

          
          <div className='editemail'>
          <img src={Email} />
          <p>Email: cliente@gmail.com </p>
          <h1>editar</h1>
          </div>

          <div className='editelefone'>
          <img src={Telefone} />
          <p>Celular: (69) 6969-6969  </p>
          <h1>editar</h1>
          </div>


          <div className='editcpf'>
          <img src={Cpf} />
          <p>CPF: ************* </p>
          <h1>editar</h1>
          </div>

          <div className='rodape66'>
            <button>Salvar alterações</button>
            
          </div>
        
        </div>
      
        </div>
   

)}