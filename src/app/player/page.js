'use client'
import React from 'react';
import styles from 'styles/player.module.css';
import Logo from 'public/assets/images/iurd.jpg'
import Image from "next/image";


export default function Player() {
    return(
        <>
        <main className={styles.main}>
            <section> 
                <div className={styles.containerEsq}>
                    <Image className={styles.logo} src={Logo} alt="Logotipo" width={120} height={100} />

                    <nav className={styles.navlat}>
                    <a href="https://www.melodia.com.br" target="_blank">Ir para o site</a>
                    <a href="https://www.melodia.com.br/pesquisa-musical-71" target="_blank">Peça sua música</a>
                    <a href="https://www.melodia.com.br/programas" target="_blank">Programas</a>
                    <a href="https://www.melodia.com.br/#contacts" target="_blank">Entre em contato</a>

                    </nav>

                    <div className="media">FACEBOOK INSTAGRAM - YT</div>
                    <div className="apps">BAIXE O APP IARD</div>
                </div>
            </section>
            
            <section className={styles.containerDir}>
            { /* player */ }
            <h1>section do player</h1>
            </section>
        </main>
        </>
    )
}