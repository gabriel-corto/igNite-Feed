
import { Heart, Heartbeat, LinkedinLogo, ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import avatar from '../assets/avatar.png'
import { useState } from 'react'

export default function Comment(props){

  const [likes, setLikes] = useState(0)
  
  function handleLikes(){
    setLikes((prevCount) => prevCount + 1)
  }

  function handleDelete(){
    props.onDeleteComment(props.content)
  }
  return (
    <div className={styles.comment}>
      <img src={avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Francisco</strong>
              <div
                className={styles.time}
                dateTime="2023/11/02"
                title="11 de Maio de 2023"
              >
                <span>Publicado á 1h</span>
              </div>
            </div>
            <button title="Excluir Comentário" onClick={handleDelete}>
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <span className={styles.reactComment} onClick={handleLikes}>
          <Heart size={16}/> Like ◾ {likes}
        </span>
      </div>
    </div>
  )
}