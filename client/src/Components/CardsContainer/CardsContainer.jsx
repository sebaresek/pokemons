import Card from "../Card/Card";
import style from './CardsContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { getAllPokemons, deletePokemon } from "../../redux/actions";
import Paginate from "../Paginate/Paginate";


const  CardsContainer  = () => {


    const dispatch = useDispatch();
    // simplemente asigna el valor de state.filteredPokemons a la variable filteredPokemons en el componente actual
    const filteredPokemons  = useSelector(state => state.filteredPokemons)
    const { numPage } = useSelector((state) => state);
    const [viewCharacters, setViewCharacters] = useState([]);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch]);



    useEffect(() => {
    //indica desde que card se va a mostar
    let desde = (numPage - 1) * 12; 
    //indica hasta que card se va a mostar
    let hasta = numPage * 12; 
    // Accede al array filteredPokemons y utiliza el método slice() para crear una nueva copia del array que contiene solo los elementos dentro del rango determinado por los índices desde y hasta
    setViewCharacters(filteredPokemons?.slice(desde, hasta));
    // El efecto se ejecutará cada vez que haya un cambio en filteredPokemons o numPage
  }, [filteredPokemons, numPage]);
    
    //calcula la cantidad de páginas necesarias para mostrar todos los elementos del array filteredPokemons. math.ceil redondea para arriba
    let cantPages = Math.ceil(filteredPokemons.length / 12);


    const handleDelete = (id) => {
        dispatch(deletePokemon(id));
      };
    

    // console.log(filteredPokemons);
    // console.log(pokemons[0].TypesOfPokemons[0].name);


    return (
        <div>
            <div className={style.container}>
                {viewCharacters && //si viewCharacters existe y no es null o falso se ejecuta el .map
                    viewCharacters.map(pokemon =>{
                        return <Card
                            key={pokemon.id} // Agregar una propiedad "key" única a cada Card
                            id= {pokemon.id}
                            name= {pokemon.name}
                            image= {pokemon.image}
                            life = {pokemon.life}
                            stroke = {pokemon.stroke}
                            defendig = {pokemon.defending}
                            speed = {pokemon.speed}
                            height = {pokemon.height}
                            weight = {pokemon.weight}
                            // el ? sirve para verificar si la propiedad types existe en el objeto pokemon. Si existe, se ejecutará la función map() sobre la propiedad types, y si no existe, se devolverá undefined.
                            types={pokemon.types?.map(type => type).join(' - ')}
                            typess={pokemon.TypesOfPokemons?.map(type => type.name).join(' - ')}
                            onDelete={handleDelete} 
                    />
                })}
            </div>
        <Paginate cantPages={cantPages} />
        </div>
    );
    
};

export default CardsContainer;



// se trae todos los pokemons a travez de useSelector y realizamos un .map para objetener los elementos que necesitamos, y pasarlos a card por props asi el pueda renderizar cada card y posteriormente CardsContainer pueda mostrar una lista de cards en '/home'


// Agregar una propiedad "key" a cada elemento que se renderiza en una lista en React es importante por varias razones:
// Mejora el rendimiento - Mantiene el estado - Facilita el desarrollo



//porque cards mapea la aplica el formato "card" que le definimos para renderizar y va mostrando el listado de cards que va obteniendo despues del .map despues de la renderizacion de card y todo eso