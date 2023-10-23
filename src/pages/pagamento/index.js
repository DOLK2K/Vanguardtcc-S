import cartao from '../../assets/images/credito.png'
import pix from '../../assets/images/pix.png'
import boleto from '../../assets/images/boleto.png'
import carne from '../../assets/images/carne.png'
import banqi from '../../assets/images/banqi.png'
import presente from '../../assets/images/cartaopresente.png'

import './index.scss'

export default function  Pagamento() {
    return(
    
        <div className='all'>
            <div className='quaaddrraaddoo'>
                <div className='resumo-do-pedido'> RESUMO DO PEDIDO</div>
                <div className='divisoriaa'>
                    <div className='titullo'>COMO VOÇE DESEJA PAGAR</div>
                    <div className='pressente'></div>


                    <div className='cartao'>
                    <img src={cartao} />
                    <h1>Cartão de credito</h1>
                    </div>

                    <div className='pixx'>
                    <img src={pix} />  
                    <h1>PIX</h1> 
                    </div>

                    <div className='boletoo'>
                    <img src={boleto} />
                    <h1>BOLETO BANCÁRIO</h1>
                    </div>

                    <div className='carnee'>
                    <img src={carne} />
                    <h1>CARNÊ DIGITAL</h1>
                    </div>

                    <div className='banqi'>
                    <img src={banqi} />
                    <h1>BANQI</h1>
                    </div>

                    <div className='cartaopresente'>
                    <img src={presente} />
                    <h1>CARTÃO PRESENTE</h1>
                    </div>





                </div>
       
            </div>
        </div>
            


        )}