import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, handleNumber } from "../../redux/actions";

export default function Paginate ({ cantPages }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  function page(number) {
    dispatch(handleNumber(number));
  }

  const renderPageNumbers = () => {
    const pageNumbers = []; // crea un arreglo vacío para almacenar los números de las páginas a mostrar
    const maxPages = cantPages > 5 ? 5 : cantPages; // calcula el máximo número de páginas a mostrar según la cantidad total de páginas
    
    if (numPage <= 1) { // si la página actual es la primera...
      for (let i = 1; i <= maxPages; i++) { // ... itera desde la página 1 hasta la página máxima a mostrar
        pageNumbers.push(i); // agrega cada número de página al arreglo
      }
    } else if (numPage >= cantPages - 1) { // si la página actual es la última o la penúltima...
      for (let i = cantPages - maxPages + 1; i <= cantPages; i++) { // ...itera desde la página (cantPages - maxPages + 1) hasta la última página
        pageNumbers.push(i); // agrega cada número de página al arreglo
      }
    } else { // si la página actual está en el medio...
      for (let i = numPage - 1; i <= numPage + 1; i++) { // ...itera desde la página anterior a la actual hasta la página siguiente a la actual
        pageNumbers.push(i); // agrega cada número de página al arreglo
      }
    }
    
    // Mapea el arreglo de números de página para generar una lista de botones para cambiar de página
    return pageNumbers.map((number) => {
      return (
        <li key={number}>
          <button onClick={() => page(number)}>{number}</button>
        </li>
      );
    });
  };
  

  return (
    <div className={style.pagination}>

      <button
        className={style.prevButton}
        onClick={prev}
        // El atributo disabled en un elemento button indica si el botón está habilitado o deshabilitado para hacer clic.
        disabled={numPage === 1} > PREV
      </button>

      {/* <ul> se utiliza para crear una lista sin ordenar, es decir, una lista de elementos que no tienen una secuencia numérica */}
      <ul className={style.pageNumbers} > {renderPageNumbers()} </ul>

      <button className={style.nextButton}
        onClick={next}
        disabled={numPage === cantPages} > NEXT
      </button>

    </div>
  );
}
