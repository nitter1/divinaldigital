'use client'
import styles from 'styles/player.module.css';
import Logo from 'public/assets/images/LOGO2.png'
import Facebook from 'public/assets/images/medias/facebook.svg'
import Instagram from 'public/assets/images/medias/instagram.svg'
import Youtube from 'public/assets/images/medias/youtube.svg'
import Appstore from 'public/assets/images/medias/appstore.png'
import Playstore from 'public/assets/images/medias/playstore.png'
import Image from "next/image";
import Link from 'next/link'

export default function Player() {
    
    return (

        <>
            <main className={styles.main}>
                <section className={styles.background}>
                    <div className={styles.containerEsq}>
                        <div className={styles.innerContainerEsq}>
                            <Image className={styles.logo} src={Logo} alt="Logotipo" width={150} height={90} />

                            <nav className={styles.navlat}>
                            <Link href="/">Ir para o site</Link>
                                <a href="https://www.melodia.com.br/pesquisa-musical-71" target="_blank">Peça sua música</a>
                                <a href="https://www.melodia.com.br/programas" target="_blank">Programas</a>
                                <a href="https://www.melodia.com.br/#contacts" target="_blank">Entre em contato</a>
                            </nav>
                            <div className={styles.media}>
                                <a href="#" target="_blank"><Image src={Facebook} alt="Facebook Icon" /></a>
                                <a href="#" target="_blank"><Image src={Instagram} alt="Instagram Icon" /></a>
                                <a href="#" target="_blank"><Image src={Youtube} alt="Youtube Icon" /></a>
                            </div>
                            <div className={styles.apps}>
                                <a href="#" target="_blank"><Image src={Playstore} alt="Playstore Badge" width={85} height={26} /></a>
                                <a href="#" target="_blank"><Image src={Appstore} alt="Appstore Badge" width={85} height={26} /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.containerDir}>
                <iframe src="https://player.srvsh.com.br/player-web/8024" frameborder="0" width="100%" height="465"></iframe>
                </section>
            </main>


        </>
    )
}
