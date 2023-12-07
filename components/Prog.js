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
          {/* Primeiro Ícone */}
          <div className={styles.iconContainer}>
            <div className={styles.iconContent}>
              <Image src={manha} width={80} height={80} />
            </div>
            <p className={styles.caption}>Manhã Abençoada</p>
          </div>

          {/* Segundo Ícone */}
          <div className={styles.iconContainer}>
            <div className={styles.iconContent}>
              <Image src={tarde} width={80} height={80} />
            </div>
            <p className={styles.caption}>Tarde Vitoriosa</p>
          </div>

          {/* Terceiro Ícone */}
          <div className={styles.iconContainer}>
            <div className={styles.iconContent}>
              <Image src={noite} width={80} height={80} />
            </div>
            <p className={styles.caption}>Noite Feliz</p>
          </div>

          {/* Quarto Ícone */}
          <div className={styles.iconContainer}>
            <div className={styles.iconContent}>
              <Image src={madrugada} width={80} height={80} />
            </div>
            <p className={styles.caption}>Madrugada</p>
          </div>
        </div>
      </section>
        </>
    )
}