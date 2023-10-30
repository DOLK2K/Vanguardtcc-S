import './index.scss'
import Lupa from '../../assets/images/Frame.png'
import icone from '../../assets/images/LogoCabeçalho.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Feito from '../../assets/images/feito.png'
import Pendente from '../../assets/images/pendentee.png'
import Caminhao from '../../assets/images/caminhaoo.png'
import Concluida from '../../assets/images/concluida.png'
import Mochila from '../../assets/images/moochila.png'
import Cabo from '../../assets/images/cabo.png'
import Camiseta from '../../assets/images/camiseta.png'
import Botas from '../../assets/images/botas.png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'

export default function(){
    return(
        <div className='meupedido'>

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
          </div>



          <div className='englobarrry'>

  
<div className='cimaaaay'>
    <div className='descricaooooy'>
 <h1>Todos </h1>
 <h3> Pendentes </h3>
 <h4>Entregues</h4>

</div>

<div className='a97y'>
<h1> <img src={Feito} />
Liberado Pedido:31620000085</h1> <h3>  <img src={Mochila} /> Mochila Tática Assault </h3>
<h4>SAÍDA:07-12-2023  ENTREGA:13-12-2023</h4>
</div>
      
<div className='a440y'>
<h1><img src={Pendente} />
Pendente Pedido:23910000083 </h1> <h3> <img src={Cabo} /> Cabo Tatico Militar </h3>
<h4>SAÍDA:Não Definida  ENTREGA:Não Definida</h4>
</div>

<div className='a364y'>
<h1><img src={Caminhao} />
A caminho Pedido:23810000049</h1> <h3> <img src={Camiseta} /> Camiseta Soldier  </h3>
<h4>SAÍDA:04-06-2023  ENTREGA:10-06-2023</h4>

</div>
<div className='a123y'>
<h1> <img src={Concluida} />
 Concluído Pedido:21810000062  </h1> <h3> <img src={Botas} />Bota Tática Masculina </h3>
<h4>SAÍDA:02-06-2023  ENTREGA:08-06-2023</h4>

</div>

</div>
</div>

<div className='emmbaix'>

            <img src={vanguard}/>          

            <img src={correio}/>

            <img src={face}/>

            <img src={twitter}/>

            <img src={insta}/>

            <img src={youtube}/>

            
          <div className='elements'>
          <p>+012 345 6789</p>
          <p>sac@vanguardtactical.com</p>
          <p>Avenida Coronel Octaviano de Freitas Costa, 69, Socorro, São Paulo</p>
            
          </div>

          </div>

</div>
    )}