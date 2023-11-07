
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "/src/assets/avatar.png",
      name: "Gabriel Corto",
      role: "Web Developer",
    },
    content: [
      { type: "paragraphs", content: "Olá Todos! 😎😋" },
      {
        type: "paragraphs",
        content:
          "Acabei de subir mais um projeto no meu Github. É um projeto que fiz no Ignite Feed, evento da Rocketseat. O nome do projeto é Iginite Feed 🚀",
      },
      { type: "Link", content: "@DevGabriel" },
    ],
    pusblishAt: "Publicado à 1h",
  },
]

export default function App(){
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                avatarUrl={post.author.avatarUrl}
                author={post.author.name}
                role={post.author.role}
                publishedAt={post.pusblishAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}