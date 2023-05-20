import Card from "../Card/Card";
import style from './CardsContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";
import Paginate from "../Paginate/Paginate";


const  CardsContainer  = ({onClose}) => {


    const dispatch = useDispatch();
    // utilizamos el hooks useSelector que es una fn que toma el estado global de la app y devuelve una parte especifica, en este caso la prop pokemons
    const filteredPokemons  = useSelector(state => state.filteredPokemons)
    const { numPage } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch]);


    //indica desde que card se va a mostar
    // si se quiere mostrar 12 elementos por página y se está en la página 3, entonces desde sería 24 (2 * 12 = 24)
    let desde = (numPage - 1) * 12; // 0, 12, 24, ...
    //indica hasta que card se va a mostar
    //si se quiere mostrar 12 elementos por página y se está en la página 3, entonces hasta sería 36 (3 * 12 = 36)
    let hasta = numPage * 12; /// 12, 24, 36, ...

    // para que muestre si o si 12 cards por paginas
    // let cantPages = Math.floor(pokemons.length / 12);
    //por si quiero mostrar 12 por paginas y que la ultima pag sea lo que resta (redondea para arriba)
    let cantPages = Math.ceil(filteredPokemons.length / 12);

    // copia un array igual que el original pasando por parametros desde donde hasta donde mostrar
    let viewCharacters = filteredPokemons?.slice(desde, hasta); 


    console.log(filteredPokemons);
    // console.log(pokemons[0].TypesOfPokemons[0].name);


    return (
        <div>
            <div className={style.container}>
                {viewCharacters &&
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
                            onClose={onClose}
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