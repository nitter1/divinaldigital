import styles from '/styles/footer.module.css'
import Link from 'next/link'
export default function FooterSite() {
    return(
        <>
        <footer className={styles.footerMain}>
<div className={styles.footerContainer}><p className={styles.pFooter}>Todos os direitos reservados © 2023 Desenvolvido por: <Link className={styles.nitter} href="https://danielnitter.netlify.app/" target="_blank">Nitter Solutions</Link></p>
</div>
</footer>
        </>
    )
}



