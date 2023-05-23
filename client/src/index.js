import React from 'react';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';


// En React 18, se introdujo una nueva API llamada createRoot() que reemplaza la función ReactDOM.render(). La API createRoot() tiene como objetivo mejorar el rendimiento y la estabilidad de la aplicación React.


const root = document.getElementById('root'); //crea una variable llamada "root" y la inicializa con el elemento del DOM encontrado con el ID "root"

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// <React.StrictMode> es un componente que ayuda a detectar problemas potenciales en la aplicación de React durante la fase de desarrollo. Al usarlo, React mostrará advertencias adicionales para ayudar a identificar errores y malas prácticas.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();