import Carousel from '@/components/Carousel'
import Prog from '@/components/Prog'
import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
<>
<div className={styles.container}>
  <Navbar />
<Carousel />
<Prog />
<h1>HOME PAGE</h1>
</div>
</>
  )
}
