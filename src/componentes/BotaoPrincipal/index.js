import styles from './BotaoPrincipal.module.css'

import React from 'react'

function BotaoPrincipal({children, tamanho}) {
  return (
    <button className={`
    ${styles.botaoPrincipal}
    ${styles[tamanho]}
    `}>{children}</button>
  )
}

export default BotaoPrincipal
