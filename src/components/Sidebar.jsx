
import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import cover from '../assets/cover.png'
import avatar from '../assets/avatar.png'
import Avatar from './Avatar'

export default function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src={cover} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src={avatar}/>

        <strong>Gabriel Francisco</strong>
        <span>Web Developer</span>
      </div>

      <div className={styles.down}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  )
}