import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Landing, Home, Detail, Form } from './views/index';
import { Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { searchPokemon } from './redux/actions';
import { useDispatch } from 'react-redux';

const URL = 'http://localhost:3001/pokemons'

function App() {

  // es un hook que devuelve un objeto donde te dice la ubicación actual de una página
  const location = useLocation();
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  

  const onSearch = async (query) => {
    try {
      let url;
      if (/^\d+$/.test(query)) {
        // si la cadena es un número
        url = `${URL}/${query}`;
      } else if (query.match(/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i)) {
        // si la cadena es un UUID v4 válido
        url = `${URL}/${query}`;
      } else if (/^[a-z]+(?:[ _-][a-z]+)*$/.test(query)) {
        // si la cadena es un nombre válido
        url = `${URL}/?name=${query}`;
      } else {
        throw new Error('Entrada no válida');
      }
      const { data } = await axios(url);
      setPokemons(data);
      
      dispatch(searchPokemon(data));
  
    } catch (error) {
      alert('No se encontró ningún Pokemon con ese ID o Nombre!');
    }
  };
  
  


  return (
    <div className="App">
      {location.pathname !== '/' ? <NavBar onSearch={onSearch} /> : null}
      {/* entonces si estamos en '/' no se va a mostrar la NavBar */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='/create' component={Form} />
      <Route exact path='/home' render={() => <Home pokemons={pokemons} />} />
    </div>
  );
}

export default App;

