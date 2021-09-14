import React from 'react';
import styles from './Card.module.css';
// import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { RESTAURANTES_GET } from '../Api';
import Error from './Helper/Error';
import Loading from './Helper/Loading';

const Card = () => {
  const { data, loading, error, request } = useFetch();
  // const [horaAtual, setHoraAtual] = React.useState(0);

  React.useEffect(() => {
    async function fetchRestaurants() {
      const { url, options } = RESTAURANTES_GET();
      const { json } = await request(url, options);
      return json;
    }
    fetchRestaurants();
  }, [request]);

  // React.useEffect(() => {
  //   const hora = new Date().getHours();
  //   const minutos = new Date().getMinutes();
  //   const segundos = new Date().getSeconds();
  //   const horaAtual = hora + 'h ' + minutos + 'm ' + segundos + 's';
  //   setHoraAtual(horaAtual);
  //   console.log(horaAtual)
  // }, [horaAtual]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={styles.card}>
        {data.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <li>{item.address}</li>
            <img src={item.image} style={{ width: '50px' }} alt={item.name} />
          </div>
        ))}
      </section>
    );
  else return null;
};

export default Card;
