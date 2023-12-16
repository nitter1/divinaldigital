import styles from "styles/gradeprog.module.css"
import Navbar from "@/components/Navbar"
import FooterSite from "@/components/Footer"

export default function Programas() {
    return(
        <>
        <Navbar />
        <main className={styles.containerGrade}>
        <h1>GRADE DE PROGRAMAÇÃO</h1>
        <div className={styles.divProgs}><p className={styles.pProgs}>BOM DIA DIVINAL</p>
        <p className={styles.titleProgs}>DE SEGUNDA À SEXTA - 06h00 às 12h00</p></div>
        <div className={styles.divProgs}><p className={styles.pProgs}>TARDE DA BÊNÇÃO</p>
        <p className={styles.titleProgs}>DE SEGUNDA À SEXTA - 12h00 às 18h00</p></div>
        <div className={styles.divProgs}><p className={styles.pProgs}>NOITE</p>
        <p className={styles.titleProgs}>DE SEGUNDA À SEXTA - 18h00 às 00h00</p></div>
        <div className={styles.divProgs}><p className={styles.pProgs}>MADRUGADA</p>
        <p className={styles.titleProgs}>DE SEGUNDA À SEXTA - 00h00 às 06h00</p></div>
        <div className={styles.divProgs}><p className={styles.pProgs}>SÁBADO DE ADORAÇÃO</p>
        <p className={styles.titleProgs}>00h00 às 23h59</p></div>
        <div className={styles.divProgs}><p className={styles.pProgs}>DOMINGO DE LOUVOR</p>
        <p className={styles.titleProgs}>00h00 às 23h59</p></div>
        </main>
        <FooterSite />
        </>
    )
}