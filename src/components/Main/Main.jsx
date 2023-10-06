import styles from './Main.module.css'
import logo from '../../assets/pokeFont.png'

const Main = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Pokemon Font" className={styles.logo}/>
        <div className={styles.searchContainer}>
            <div className={styles.pokeSprite}>
              <img src='' />
            </div>
            <div className={styles.pokeStats}>
              <p className={styles.stat}></p>
              <p className={styles.stat}></p>
              <p className={styles.stat}></p>
              <p className={styles.stat}></p>
              <p className={styles.stat}></p>
              <p className={styles.stat}></p>
            </div>
        </div>
    </div>
  )
}

export default Main