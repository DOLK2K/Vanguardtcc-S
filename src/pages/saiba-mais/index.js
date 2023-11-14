
import './index.scss'
import sla from '../../assets/images/gestao-de-pessoas-o-que-e-nas-organizacoes.webp';
import icone from '../../assets/images/LogoCabeçalho.png';
import Lupa from '../../assets/images/Frame.png';
import Carro from '../../assets/images/Untitled.png';
import Barra from '../../assets/images/Untitled (2).png'
import Seta from '../../assets/images/Untitled (3).png'
import vanguard from '../../assets/images/vanguard.png'
import correio from '../../assets/images/correio.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'

export default function Saiba() {
    return (

        <main>
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

            <div className='funndao'>
          
                <div className='sabomuito'>
                    <h1> Quem Somos</h1>
                    <p>Missão:
Nossa missão é fornecer equipamentos e soluções de alta qualidade para aqueles que buscam aventuras, sobrevivência e preparação tática. Queremos ajudar nossos clientes a se sentirem seguros, confiantes e preparados para qualquer desafio que enfrentem ao ar livre.

Valores:

Qualidade: Priorizamos a qualidade em todos os produtos que oferecemos. Selecionamos cuidadosamente os melhores equipamentos de marcas renomadas para garantir a excelência.
Segurança: Acreditamos que a segurança é fundamental em todas as atividades ao ar livre. Nossos produtos são projetados para ajudar os clientes a enfrentar desafios com segurança.
Confiabilidade: Queremos que nossos clientes confiem em nossos produtos. Procuramos oferecer equipamentos confiáveis que podem resistir às condições mais adversas.
Excelência: Buscamos a excelência em todas as experiências ao ar livre. Queremos ajudar nossos clientes a superar suas expectativas, fornecendo os equipamentos mais avançados e funcionais do mercado.
Público-Alvo:
Atendemos a uma ampla variedade de pessoas, desde aventureiros e entusiastas de esportes ao ar livre até profissionais em busca de equipamentos confiáveis. Nossa comunidade de exploradores valoriza a preparação e a qualidade dos equipamentos que oferecemos.

Compromisso:
Estamos comprometidos em ajudar nossos clientes a enfrentar qualquer desafio com segurança. Nossa equipe especializada está à disposição para fornecer orientação e suporte, garantindo que você esteja bem equipado para suas aventuras e necessidades de sobrevivência.
Junte-se à nossa comunidade de exploradores e confie em nós para equipá-lo com tudo o que você precisa para suas aventuras ao ar livre. Seja qual for o seu objetivo, estamos aqui para apoiá-lo e ajudá-lo a atingi-lo com sucesso.

</p>
            
                
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

        </main>
        
    )


}

