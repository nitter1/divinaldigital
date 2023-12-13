import Carousel from '@/components/Carousel'
import Prog from '@/components/Prog'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import styles from './page.module.css'
import Radio from '../../public/assets/images/LOGO2.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Carousel />
        <Prog />
        <main>
          <div className={styles.divMain}><h1 className={styles.h1Text}>RÁDIO DIVINAL DIGITAL</h1>
          <h1 className={styles.h1Text2}>Adoração e Informação</h1>
          </div>

          <section className={styles.secMain}>
            <div className={styles.divSecMain}>
              <p className={styles.paragraph}>A rádio Divinal Digital, pioneira na transmissão totalmente digital (via streaming) no bairro de Campo Redondo, em São Pedro da Aldeia, RJ, foi fundada em dezembro de 2023 por Roger Nitter, locutor, produtor de áudio e empreendedor com mais de 10 anos de experiência em locução publicitária. Anteriormente, Roger Nitter foi proprietário da Áudio Delta Produções, um estúdio de produção de áudio operante de 2008 a 2019, situado na zona norte da capital do Rio de Janeiro.
              <br /><br/>
A missão da rádio Divinal Digital, além de ser uma rádio digital (streaming), é difundir a palavra de Deus e o evangelho de nosso Senhor e Salvador Jesus Cristo por meio de pregações, louvores e adorações. Além disso, a rádio proporciona entretenimento, informação e conexão, desempenhando diversas funções essenciais:</p>
<br /><br /><br /><br /><br /><br /><br /><Image src={Radio} width={350} height={300} />
            </div>

            <div className={styles.divSecMain2}>
            <nav className={styles.navMain}>
                <ol className={styles.olMain}>
                  <li className={styles.liMain}>Entretenimento: A programação abrange uma variedade de programas, como louvores, publicidade, entrevistas e outros conteúdos destinados a entreter e cativar o público que se identifica com o trabalho oferecido pela rádio Divinal Digital.</li>
                  <li className={styles.liMain}>Informação: A rádio assume um papel crucial na disseminação de notícias locais, nacionais e internacionais, fornecendo atualizações sobre eventos importantes, condições meteorológicas, trânsito e outros assuntos relevantes.</li>
                  <li className={styles.liMain}>Cultura e Educação: Programas educativos, culturais e informativos enriquecem a vida dos ouvintes, abordando temas variados, como história, ciência e literatura.</li>
                  <li className={styles.liMain}>Conexão com a Comunidade: Destaque para eventos locais, organizações e promoção de interações com os membros da comunidade.</li>
                  <li className={styles.liMain}>Música e Descoberta: A programação contribui para a descoberta de novas músicas e artistas, desempenhando um papel importante na promoção de músicos e na diversidade musical, apresentando uma variedade de ritmos do gênero gospel.</li>
                  <li className={styles.liMain}>Acompanhamento em Tempo Real: A rádio Divinal Digital possui a capacidade única de fornecer informações em tempo real, incluindo notícias de última hora, atualizações de trânsito, condições meteorológicas imediatas e hora certa.</li>
                  <li className={styles.liMain}>Interação e Engajamento: A rádio incentiva a participação ativa dos ouvintes por meio de chamadas telefônicas, mensagens de áudio e texto (WhatsApp), redes sociais, promoções e brindes, estabelecendo assim uma relação mais próxima e interativa com o público ouvinte.</li>
                </ol>
              </nav>
              </div>
          </section>
          {/*<section className={styles.secMainLogo}></section>*/}
        </main>
        <footer>
          <div className={styles.footerContainer}><p className={styles.pFooter}>Todos os direitos reservados © 2023 Desenvolvido por: <Link className={styles.nitter} href="https://danielnitter.netlify.app/" target="_blank">Nitter Solutions</Link></p>
          </div>
          
        </footer>
      </div>
    </>
  )
}
