
import Comment from '../components/Comment'
import Avatar from '../components/Avatar'

import styles from './Post.module.css'
import avatar from '../assets/avatar.png'
import { useEffect, useState } from 'react'
import { Key, Warning } from 'phosphor-react'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: { avatar },
      name: "Gabriel Corto",
      role: "Web Developer",
    },
    content: [
      { type: "paragraphs", content: "Falaa Dev! 🤣😅😅" },
      {
        type: "paragraphs",
        content:
          "Mais um projeto no meu github. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀 desenvolvido com React.js e aplicando conceitos de #Componetização, #States, #Props, #Imutabilidade 💻💻 ",
      },
      { type: "Link", content: "@React Js" },
    ],
  },
]

export default function Post(props){
  
  const [comments, setComments] = useState(
    ["Amei isso Cara 😂😁😀!", "Projecto Legal"]
  )
  const [newComment, setNewComment] = useState("")

  const isNewCommentEmpty = newComment.length === 0

  function handleNewCommentChange(event) {
    setNewComment(event.target.value)
  }
  function handleCreateNewComment(event) {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')

  } 
  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeleteOne)
  }

  useEffect(() => {
    document.title =
      comments.length === 0
        ? `igNite Feed`
        : `igNite Feed (${comments.length}) Novos Comentários`
  }, [comments])

  function InvalidComment(){
    event.target.setCustomValidity('Campo Obrigatório !')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatar} />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <div className={styles.time} title="Hoje de Manhã">
          <strong>{props.publishedAt}</strong>
        </div>
      </header>

      <div className={styles.content}>
        {posts.map((post) => {
          return post.content.map((line) => {
            if (line.type === "paragraphs") {
              return <p>{line.content}</p>
            } else if (line.type === "Link") {
              return (
                <p>
                  <a href="#">{line.content}</a>
                </p>
              )
            }
          })
        })}
      </div>

      <form
        className={styles.commentForm} onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedBack</strong>

        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={InvalidComment}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment  =>
         <Comment 
          content={comment} 
          onDeleteComment={deleteComment} />
        )}
      </div>
    </article>
  )
}