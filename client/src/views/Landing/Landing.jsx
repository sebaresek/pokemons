import React from 'react';
import style from './Landing.module.css';
import pikachu from './pikachu.png'
// import { Link } from 'react-router-dom';
// import pokeBola from './pokeBola.png'

function Landing() {
  return (
    <div className={style.body}>

      <div className={style.container}>


          {/* La propiedad alt en la etiqueta img se utiliza para proporcionar una descripción de la imagen para los usuarios que no pueden ver la imagen */}
          <img src={pikachu} className={style.pikachuImage} alt="Pikachu Logo" />


          <h1 className={style.title}>- P I K A C H U -</h1>
            <h2 className={style.description__title}>Let's Go, Pikachu!</h2>
            <p className={style.description__text}>On this page there is a platform where you can search and check detailed information of various Pokémon character cards. In it you will find a wide variety of cards with their respective stats and abilities. This page is an essential tool for any Pokémon fan who wants to know more about their favorite characters, I invite you to take a look at it ! </p>
          
            {/* La etiqueta "a" es utilizada para crear un enlace a otra página web */}
          <a href="/home" className={style.button}>HOME</a>

          {/*la etiqueta footer se ocupa para el pie de pagina */}
        <footer> 
          <p className={style.footer} >Copyright © 2023 | Seba Resek ©</p>
        </footer>

      </div>

    </div>
  );
}

export default Landing;
















//En esta página hay una plataforma donde puedes buscar y consultar información detallada de varias cartas de personajes de Pokémon. En él encontrarás una gran variedad de cartas con sus respectivos stats y habilidades. Esta página es una herramienta imprescindible para cualquier fan de Pokémon que quiera saber más sobre sus personajes favoritos, te invito a echarle un vistazo.