import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import style from './Home.module.css';
import { filterCards, orderCards,filterTypes } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Home = ({ pokemons }) => {
  // console.log(pokemons)

  const dispatch = useDispatch()

  const handleOrder = (event) => {
    const selectedValue = event.target.value;
    
    if (selectedValue === 'A' || selectedValue === 'D') {
      dispatch(orderCards(selectedValue)); // Ordenamiento por nombre ascendente o descendente
    } else if (selectedValue === 'Attack') {
      dispatch(orderCards('Attack')); // Ordenamiento por ataque
    }
  };

  const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
  }

  const handleFilterTypes = (event) => {
  dispatch(filterTypes(event.target.value));
};

  return (

    <div >
            <div className={style.filter}>
                <select onChange={handleOrder} name="Order" className={style.select}>
                {/* <option disabled selected>ORDER BY</option> */}
                <option value="A">Upward</option>
                <option value="D">Falling</option> 
                <option value="Attack">By attack</option>
                </select >

                <select onChange={handleFilter} name="Filter" className={style.select}>
                <option value="all" >All</option>
                <option value="API" >API</option>
                <option value="Database" >Database</option>
                </select>

                <select onChange={handleFilterTypes} name="Filter" className={style.select}>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
                </select>

            </div>
            
      <CardsContainer  pokemons={pokemons} />
      
    </div>
  );
};

export default Home;
