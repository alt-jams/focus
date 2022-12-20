import styles from '../styles/pages/Home.module.css';

export function LogoSection() {
  return (
    <div className={styles.logoSection}>
        <img src={'favicon.png'} alt="logo" width={60}/>
        <h1 className={styles.logoTitle}>On Focus</h1>
    </div>
  )
}

