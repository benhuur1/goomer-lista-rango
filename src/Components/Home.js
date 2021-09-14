import React from 'react';
import useForm from '../Hooks/useForm';
import Card from './Card';
import Input from './Forms/Input';
import styles from './Home.module.css';

const Home = () => {
  const search = useForm();
  console.log(search.value);
  return (
    <div className="container1">
      <h1 className="title">Bem-vindo ao Lista Rango</h1>
      <center>
        {' '}
        <form name="FormBusca" id="FormBusca" method="post">
          <Input
            label="Buscar estabelecimento"
            type="search"
            name="search"
            placeholder="Digite aqui..."
            {...search}
          />
        </form>
      </center>
      <p className={styles.p}></p>
      <Card />
    </div>
  );
};

export default Home;
