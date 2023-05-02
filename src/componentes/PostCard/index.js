import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

function PostCard({post}) {
  return (
    <Link to={`/posts/${post.id}`}>
    <div className={styles.post}>
        <img className={styles.capa} src={`/assents/posts/${post.id}/capa.png`} alt='Imagem de capa do post'></img>
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
    </Link>
    
  )
}

export default PostCard
