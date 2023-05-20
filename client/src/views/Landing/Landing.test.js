import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
  it('renderiza la vista Landing correctamente', () => {
    render(<Landing />); //para renderizar el componente


    const titleElement = screen.getByText("Let's Go, Pikachu!"); //buscar elementos en la interfaz de usuario.
    expect(titleElement).toBeInTheDocument(); //verificar si un elemento está presente 


    const descriptionElement = screen.getByText(/On this page there is a platform where you can search and check detailed information of various Pokémon character cards/i);
    expect(descriptionElement).toBeInTheDocument();


    const imageElement = screen.getByAltText('Pikachu Logo');
    expect(imageElement).toBeInTheDocument();


    const buttonElement = screen.getByText('HOME');
    expect(buttonElement).toBeInTheDocument();

    
    const footerElement = screen.getByText(/Copyright © 2023 | Seba Resek ©/);
    expect(footerElement).toBeInTheDocument();
  });
});
