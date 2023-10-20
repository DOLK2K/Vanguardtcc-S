
import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Retangulo from '../../assets/images/retanguloo.png'
import Temporario from '../../assets/images/fundotemporario.png'


import './index.scss';
import React,{ useState } from 'react'


export default function Destaques() {

 const [inputValue, setInputValue] = useState('');



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

            <div className='Title'>
              <h1>Produtos em Destaque</h1>
            </div>

            
              <div className='Filtros'>
                <h1>Filtrar por</h1>
                <h3>Produtos</h3>
              </div>



              <div className='primeirapt'>

              <div className='produtoz'>
                <div className='inputs'>
                  <label htmlFor="inputclicavel"> </label>
                  <input type='checkbox' id='greencheckbox' className={inputValue}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  <input type='checkbox' id='inputclicavel' value={inputValue} onChange={onclick}></input>
                  
                </div>

                <div className='objetoss'>

                <div className='objeto'>                
                   <img src={Temporario} />
                </div>

                <div className='objeto1'>
                <img src={Temporario} />
                </div>

                <div className='objeto2'>
                <img src={Temporario} />
                </div>

                </div>

                               
                </div>
                                            
              </div>

                <div className='detalhes'>

                

                <div className='Nomes'>
                  <h1>Nome do Produto</h1>
                  <h3>Nome do Produto</h3>
                  <h4>Nome do Produto</h4>

                </div>
                
                </div>





            </div>


    </div> 
   

    )
}