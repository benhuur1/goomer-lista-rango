import React from 'react';
import styles from './Card.module.css';
import imgFood from '../Assets/vegan-restaurant-logo-design_1438-10@2x.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <selection className={styles.card}>
      <div className={styles.cardBox}>
        <span className={styles.aberto}>Aberto agora</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.aberto}>Aberto agora</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.aberto}>Aberto agora</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.aberto}>Aberto agora</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.fechado}>Fechado</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.fechado}>Fechado</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.fechado}>Fechado</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
      <div className={styles.cardBox}>
        <span className={styles.fechado}>Fechado</span>
        <div className={styles.item}>
          <div>
            <img src={imgFood} alt="Icone nature food" />
          </div>
          <div>
            <Link to={`/cardapio`}>Nome do Restaurante</Link>
            <p>Endereço do restaurante</p>
          </div>
        </div>
      </div>
    </selection>
  );
};

export default Card;
