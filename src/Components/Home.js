import React from 'react';
import Card from './Card';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Bem-vindo ao Lista Rango</h1>
      <center>
        {' '}
        <input
          type="search"
          className={styles.input}
          placeholder="Buscar estabelecimento"
        />
      </center>
      <Card />
    </div>
  );
};

export default Home;
