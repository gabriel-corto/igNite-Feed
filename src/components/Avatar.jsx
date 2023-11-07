
import styles from '../components/Sidebar.module.css'

export default function Avatar(props){
  return (
    <img src={props.src} className={styles.avatar}/>
  )
}