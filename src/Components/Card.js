import React from 'react';
import styles from './Card.module.css';
import component from '../Assets/component.png';

const Card = () => {
  return (
    <selection className={styles.grid}>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
      <div className={styles.item}>
          <img src={component} alt="icone" />
        <div>
          <p>Nome do Restaurante</p>
          <span>Endereço do restaurante</span>
        </div>
        <span className={styles.circle}>Aberto <br/> agora</span>
      </div>
    </selection>
  );
};

export default Card;
