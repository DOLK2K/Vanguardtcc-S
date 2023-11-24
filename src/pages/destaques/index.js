
import icone from '../../assets/images/LogoCabeçalho.png'
import Lupa from '../../assets/images/Frame.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import a from '../../assets/images/a.png'
import Jaqueta from '../../assets/images/jaqueta3.png'
import Temporario from '../../assets/images/fundocinza.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import Bota from '../../assets/images/Untitled (4).png'
import Bota1 from '../../assets/images/Untitled (6).png'
import Bota2 from '../../assets/images/Untitled (5).png'
import Bota3 from '../../assets/images/oclinhos.png'
import Bota4 from '../../assets/images/bolsa3.png'
import Bota5 from '../../assets/images/barraca3.png'
import Bota6 from '../../assets/images/tenis3.png'


import './index.scss';
import Cabecalho from '../renderizacao'
import React, { useState } from 'react'


export default function Destaques() {




  return (
    <div className='globamento'>
      <div className="App">
      <Cabecalho />


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

              <input type='checkbox' ></input>
              <input type='checkbox' ></input>
              <input type='checkbox' ></input>
              <input type='checkbox' ></input>
              <input type='checkbox' ></input>
              <input type='checkbox'></input>

            </div>

            <div className='objetoss'>

              <div className='objeto'>
                <img src={a} />
              </div>

              <div className='objeto1'>
                <img src={Jaqueta} />
              </div>

              <div className='objeto2'>
                <img src={Bota} />
              </div>

            </div>


          </div>

        </div>

        <div className='detalhes'>



          <div className='Nomes'>
            <h1>Garrafa Térmica CamelBak</h1>
            <h3>Jaqueta Militar Ipermeavel</h3>
            <h4>Bota Anti-Perfuro One</h4>

          </div>

          <div className='Preços'>
            <h1>29,90</h1>
            <h3>49,85</h3>
            <h4>78,30</h4>
          </div>

          <div className='butooes'>
            <button>Comprar</button>
            <button>Comprar</button>
            <button>Comprar</button>
          </div>

        </div>


        <div className='objetosss'>

          <div className='objeto0'>
            <img src={Bota1} />
          </div>

          <div className='objeto11'>
            <img src={Bota2} />
          </div>

          <div className='objeto22'>
            <img src={Bota3} />
          </div>

        </div>

        <div className='detalhes'>



          <div className='Nomes1 '>
            <h1>Luva Tática Militar Jyx Preta</h1>
            <h3>Mochila Tatica Assault</h3>
            <h4>Óculos Tático Echo Laranja </h4>

          </div>

          <div className='Preços'>
            <h1>35,70</h1>
            <h3>52,10</h3>
            <h4>39,10</h4>
          </div>

          <div className='butooes'>
            <button>Comprar</button>
            <button>Comprar</button>
            <button>Comprar</button>
          </div>

        </div>


        <div className='objetosss'>

          <div className='objeto0'>
            <img src={Bota4} />
          </div>

          <div className='objeto11'>
            <img src={Bota5} />
          </div>

          <div className='objeto22'>
            <img src={Bota6} />
          </div>

        </div>

        <div className='detalhes'>



          <div className='Nomes1 '>
            <h1>Capa Universal LC para Fuzil</h1>
            <h3>Barraca Iglu Luna 7 Pessoas</h3>
            <h4>Tênis Nomade- Warskin Black</h4>

          </div>

          <div className='Preços'>
            <h1>69,90</h1>
            <h3>449,80</h3>
            <h4>199,90</h4>
          </div>

          <div className='butooes'>
            <button>Comprar</button>
            <button>Comprar</button>
            <button>Comprar</button>
          </div>

        </div>





      </div>



      <div className='rodape-home'>

        <img src={vanguard} />

        <img src={correio} />

        <img src={face} />

        <img src={twitter} />

        <img src={insta} />

        <img src={youtube} />


        <div className='elements'>
          <p>+012 345 6789</p>
          <p>sac@vanguardtactical.com</p>
          <p>Avenida Coronel Octaviano de Freitas Costa, 69, Socorro, São Paulo</p>

        </div>














      </div>



    </div>


  )
}