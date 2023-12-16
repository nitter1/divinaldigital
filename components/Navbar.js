// Importando os módulos necessários
'use client'
import Image from "next/image";
import Logo from "../public/assets/images/LOGO2.png";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { useState } from "react";

// Componente Navbar
export default function Navbar() {
  // Estado para controlar a exibição dos links
  const [isLinksVisible, setIsLinksVisible] = useState(false);

  // Função para alternar a visibilidade dos links
  const handleToggle = () => {
    setIsLinksVisible((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.topnav} id="myTopnav">
        <Image className={styles.image} src={Logo} alt="Logotipo Rádio Divinal Digital" />
        <ul className={styles.ulNav}>
        <Link href="/" className={`${styles.liHome} ${styles.active}`}>INICIO</Link>
          <Link className={styles.li} href="/player"> NO AR <div className={styles.bola}></div> </Link>
          <Link className={styles.li} href="/programacao">PROGRAMAÇÃO</Link>
          <Link className={styles.li} href="/news">NOTÍCIAS</Link>
          <Link className={styles.li} href="/promocoes">PROMOÇÕES</Link>
          <Link className={styles.li} href="/about">FALE CONOSCO</Link>
          <Link href="javascript:void(0);" className={styles.icon} onClick={handleToggle}>
            <i className="fa fa-bars"></i>
          </Link>
          </ul>
      </nav>

      {/* Renderização condicional dos links com base no estado */}
      {isLinksVisible && (
        <div id="myLinks">
          {/* Inclua seus links aqui */}
          <Link className={styles.li} href="/player"> AO VIVO </Link>
          <Link className={styles.li} href="/programacao">PROGRAMAÇÃO</Link>
          <Link className={styles.li} href="/news">NOTÍCIAS</Link>
          <Link className={styles.li} href="/promocoes">PROMOÇÕES</Link>
          <Link className={styles.li} href="/about">FALE CONOSCO</Link>
          {/* Adicione mais links conforme necessário */}
        </div>
      )}
    </>
  );
}
