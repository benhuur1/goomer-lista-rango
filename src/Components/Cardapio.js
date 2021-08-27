import React from 'react';
import styles from './Cardapio.module.css';
import CardMenu from './CardMenu';
import imgFood from '../Assets/vegan-restaurant-logo-design_1438-10@2x.png';
import stylesInput from './Home.module.css';

const Cardapio = () => {
  return (
    <div className="container">
      <div className={styles.cardapio}>
        <div className={styles.cardapioHeader}>
          <div className={`${styles.item} `}>
            <img src={imgFood} alt="Logo" />
          </div>
          <div className={`${styles.item} `}>
            <div style={{ paddingTop: '20px' }}>
              <h1>Nome do Restaurante</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Segunda à Sexta: <strong>11:30 às 15:00</strong>
              </p>
              <p>
                Sábado: <strong>11:30 às 22:00</strong>
              </p>
              <p>
                Domingos e Feriados: <strong>11:30 às 15:00</strong>
              </p>
            </div>
          </div>
          <div className={`${styles.item} `}></div>
        </div>
        <input type="search" className={stylesInput.input} />
        <CardMenu />
        <div className="col-auto">
          <label className="sr-only" for="inlineFormInputGroup">
            Username
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text" style={{background: 'white', borderColor:'grey'}}>Buscar no cardápio</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Username"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
