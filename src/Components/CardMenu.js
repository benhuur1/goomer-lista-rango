import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardMenu.module.css'
import imagemPrato from '../Assets/prato-de-restaurante-vegetariano@2x.png'

const CardMenu = () => {
  return (
    <div>
      <selection className={styles.card}>
      <div className={styles.cardBox}>
        <div className={styles.item}>
          <div>
            <img src={imagemPrato} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <div className={styles.item}>
          <div>
            <img src={imagemPrato} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
     
    </selection>
    </div>
  )
}

export default CardMenu
