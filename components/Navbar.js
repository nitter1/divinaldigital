import Image from "next/image";
import Logo from "../public/assets/images/LOGO2.png"
import styles from "../styles/navbar.module.css"
import Link from 'next/link'

export default function Navbar() {
    return(
        <>
        <nav className={styles.navbar}>
            <Image className={styles.image} src={Logo} alt="Logotipo Sudoeste FM 96,9"/>
            <ul className={styles.ul}>
            <Link href="/" legacyBehavior><a className={styles.li}>INÍCIO</a></Link>
            <Link href="/player" legacyBehavior><a className={styles.li} target="_blank">NO AR</a></Link>
            <Link href="/programacao" legacyBehavior><a className={styles.li}>PROGRAMAÇÃO</a></Link>
                <Link href="/news" legacyBehavior><a className={styles.li}>NOTÍCIAS</a></Link>
                <Link href="/promocoes" legacyBehavior><a className={styles.li}>PROMOÇÕES</a></Link>
                <Link href="/about" legacyBehavior><a className={styles.li}>QUEM SOMOS</a></Link>
            </ul>
        </nav>
        </>
    )
}