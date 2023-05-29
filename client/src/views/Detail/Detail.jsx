import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';
import axios from 'axios';
const URL_BASE = 'https://pokemons.up.railway.app/pokemons/';

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});


  useEffect(() => {
    axios.get(`${URL_BASE}/${id}`)
      .then(({data}) => {
        if (data.name) {
          setPokemon(data);
        } else {
          alert('No hay personajes con ese ID');
        }
      });
    return setPokemon({}); //Al final del efecto, se devuelve setPokemon({}). Esto se hace para restablecer el estado del Pokémon a un objeto vacío cuando el componente se desmonta o cuando cambia el ID
  }, [id]);
  

  if (!pokemon) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const { name, image, life, stroke, defending, speed, height, weight } = pokemon;

  //   console.log('name:', name);
  //   console.log('image:', image);
  //   console.log('life:', life);
  //   console.log('stroke:', stroke);
  //   console.log('defending:', defending);
  //   console.log('speed:', speed);
  //   console.log('height:', height);
  //   console.log('weight:', weight);
  //   console.log('type:', pokemon.TypesOfPokemons?.map(type => type.name).join(' - '));

  const types = pokemon.types?.map(type => type).join(' - ')
  const typess = pokemon.TypesOfPokemons?.map(type => type.name).join(' - ')


  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2 className={styles.detailTitle}> Pokémon Details </h2>
        <div>
          <img src={image} alt={name} className={styles['detail-image']} />
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>ID:</span>
          <span className={styles['detail-info-value']}>{id}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Name:</span>
          <span className={styles['detail-info-value']}>{name}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Life:</span>
          <span className={styles['detail-info-value']}>{life}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Stroke:</span>
          <span className={styles['detail-info-value']}>{stroke}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Defending:</span>
          <span className={styles['detail-info-value']}>{defending}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Speed:</span>
          <span className={styles['detail-info-value']}>{speed}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Height:</span>
          <span className={styles['detail-info-value']}>{height}</span>
        </div>

        <div className={styles['detail-info']}>
          <span className={styles['detail-info-label']}>Weight:</span>
          <span className={styles['detail-info-value']}>{weight}</span>
        </div>

        <div className={styles['detail-types']}>
          <span className={styles['detail-types-label']}>Type: </span>
          <span className={styles['detail-info-value']}>{types ? types : typess}</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;






















