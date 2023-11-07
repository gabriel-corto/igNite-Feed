
import styles from './Header.module.css'
import igNiteLogo from '../assets/ignite-logo.svg'

export default function Header(){
  return (
    <header className={styles.header}>
      <span>
        <img src={igNiteLogo} alt="" />
      </span>
      <strong>Ignite Feed</strong>
    </header>
  )
}