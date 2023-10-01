import './index.scss'
import Lupa from '../../assets/images/Frame.png'
import icone from '../../assets/images/LogoCabeçalho.png'
import Carro from '../../assets/images/Untitled.png'
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import Retangulo from '../../assets/images/retanguloo.png'
import Olho from '../../assets/images/olho.png'


export default function(){
    return(
        <div className='geral'>

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

          <div className='geral2'>

            <div className='faixa-011'>
                <img src={Retangulo} />
                <h1>Pedido</h1>
                <h3>Data</h3>
                <h4>Status</h4>
                <h5>Valor</h5>


            </div>

            <div className='faixa-022'>
            <img src={Retangulo} />
            <h3>#220 Cliente-01</h3>
            <img src={Olho}/>
            <h4>35 Minutos atrás</h4>
            <h5>Aguardando</h5>
            <h6>R$79,50</h6>
            </div>

            <div className='faixa-033'>
            <img src={Retangulo} />
            <h4>#128 Cliente-02</h4>
            <img src={Olho}/>
            <h3>15 Minutos atrás</h3>
            <h6>Pendente</h6>
            <h1>R$29,70</h1>
            </div>

            <div className='faixa-044'>
            <img src={Retangulo} />
            <h1>#056 Cliente-03</h1>
            <img src={Olho}/>
            <h3>17 Horas atrás</h3>
            <h4>Cancelado</h4>
            <h5>R$49,90</h5>

            </div>

            <div className='faixa-055'>
            <img src={Retangulo} />
            <h1>#322 Cliente-04</h1>
            <img src={Olho}/>
            <h3>21 Horas atrás</h3>
            <h4>Em Andamento</h4>
            <h5>R$98,50</h5>
            </div>

            <div className='faixa-066'>
            <img src={Retangulo} />
            <h1>#289 Cliente-05</h1>
            <img src={Olho}/>
            <h3>29 de Julho de 2023</h3>
            <h4>Processando</h4>
            <h6>R$37,00</h6>

            </div>

            <div className='faixa-077'>
            <img src={Retangulo} />
            <h1>#162 Cliente-06</h1>
            <img src={Olho}/>
            <h3>15 de Julho de 2023</h3>
            <h4>Entregue</h4>
            <h5>R$69,99</h5>

            </div>
            </div>





        </div>
    )
}