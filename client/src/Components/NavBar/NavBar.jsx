import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import github from './github.png';
import SearchBar from '../SearchBar/SearchBar';
import { resetPokemons } from '../../redux/actions';
import { useDispatch } from "react-redux";


const NavBar = ({ onSearch }) => {
    const dispatch = useDispatch()

    return(

        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>


            <div>
                <button className={style.button} onClick={()=> dispatch(resetPokemons())}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/home' >HOME</Link>
                </button>

                <button className={style.buttonForm}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/create' >FORM</Link>
                </button>
            </div>

            <button className={style.buttonLog} >
                <a href='/' style={{textDecoration: 'none', color: 'black'}}> LOG OUT </a> 
            </button>

            {/* El atributo target="_blank" es una forma de especificar que el enlace debe abrirse en una nueva ventana o pestaña  
            rel="noreferrer" al enlace de GitHub para asegurarte de que no se abra una ventana emergente no deseada o maliciosa */}
            <a href="https://github.com/sebaresek/" target="_blank" rel="noreferrer" >
                <img src={ github } className={style.buttonGithub} alt="GitHub" width="40" height="40"/>
            </a>
            

        </nav>
    )
}

export default NavBar;