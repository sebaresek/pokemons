import style from "./SearchBar.module.css";
import { useState } from 'react';


function SearchBar({ onSearch }) {
   const [id, setId] = useState(''); //inicia el estado id con un string vacio ''

   const handleChange = (event) => {//cada vez que el usuario escribe algo en el campo de entrada, la función handleChange se ejecuta y actualiza el estado id
      setId(event.target.value);
   }

   const handleKeyPress = (event) => {
      // event.key es una propiedad que se encuentra en el objeto del evento de teclado
      if (event.key === 'Enter') {
        onSearch(id);
      }
    };

    function submit(){
      onSearch(id)
    }    

   return (
      <div className={style.container}>
         <input className={style.search} type='search' placeholder='write an ID or NAME' onKeyPress={handleKeyPress} onChange={handleChange} value={id} />
         <button onClick={submit}> SEARCH </button>
      </div>
   );
}

export default SearchBar;