import './index.scss'
import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Quadradobranco from '../../assets/images/Quadradobranco.png'
import Image62 from '../../assets/images/image 62 (1).png'
export default function estoquedesc() {
return (

<div className='globamento'>
<div className="App">
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
</div>




 <div className='englobarrr'>

  
        <div className='cimaaaa'>
            <div className='descricaoooo'>
         <h1>código </h1>
         <h3> Descrição completa </h3>
         <h4>Estoque</h4>

        </div>

        <div className='a97'>
        <img src={Quadradobranco} />
        <h1>#097  <img src={Image62} /> Lanterna Jetbeam BC25 1480 Lúmens     </h1> 
        <h4>10</h4>
        </div>

        <div className='a440'>
        <img src={Quadradobranco} />
        <h1>#440 <img src={Image62} /> Mochila Tática Assault  </h1>
        <h4>24</h4>
        </div>

        <div className='a364'>
        <img src={Quadradobranco} />
        <h1>#364 <img src={Image62} /> Óculos Tático Echo Laranja Evo  </h1>
        <h4>97</h4>
       
        </div>
        <div className='a123'>
        <img src={Quadradobranco} />
        <h1>#123 <img src={Image62} /> Tênis Nomade  Warskin Black  </h1>
        <h4>21</h4>
        
        </div>
        <div className='a443'>
        <img src={Quadradobranco} />     
        <h1>#443 <img src={Image62}/> Jaqueta militar Impermeável </h1> 
        
        <h4>50</h4>
        </div>
        <div className='a279'>
        <img src={Quadradobranco} />    
        <h1>#279 <img src={Image62}  /> Calça Cargo Tática Preta -Ribstop- 7 Bolsos </h1>
        <h4>30</h4  >
        
        </div>

    </div>

    
 </div>

 </div>

    
)
}