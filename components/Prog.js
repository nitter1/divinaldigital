import styles from '../styles/prog.module.css'
import Image from 'next/image'
import manha from '../public/assets/images/manha.png'
import tarde from '../public/assets/images/tarde.png'
import noite from '../public/assets/images/noite.png'
import madrugada from '../public/assets/images/madrugada.png'
export default function Prog() {
    return(
        <>
 <section className={styles.container}>
        <h1 className={styles.title}>Programação</h1>

          
        <div className={styles.iconsContainer}>
          {/* Primeiro e Segundo Ícone em cima */}
          <div className={`${styles.iconsRow} ${styles.iconContainer}`}>
            <div className={styles.iconContent}>
              <Image src={manha} width={60} height={60} alt='MANHÃ' />
            </div>
            <p className={styles.caption}>Manhã</p>
          </div>

          <div className={`${styles.iconsRow} ${styles.iconContainer}`}>
            <div className={styles.iconContent}>
              <Image src={tarde} width={60} height={60} alt='TARDE' />
            </div>
            <p className={styles.caption}>Tarde</p>
          </div>

          {/* Terceiro e Quarto Ícone embaixo */}
          <div className={`${styles.iconsRow} ${styles.iconContainer}`}>
            <div className={styles.iconContent}>
              <Image src={noite} width={60} height={60} alt='NOITE' />
            </div>
            <p className={styles.caption}>Noite</p>
          </div>

          <div className={`${styles.iconsRow} ${styles.iconContainer}`}>
            <div className={styles.iconContent}>
              <Image src={madrugada} width={60} height={60} alt='MADRUGADA' />
            </div>
            <p className={styles.caption}>Madrugada</p>
          </div>
        </div>
        </section>
        </>
    )
}