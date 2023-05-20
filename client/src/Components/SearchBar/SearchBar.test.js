import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('llama a la función onSearch cuando se presione la tecla Enter', () => {
    const mockOnSearch = jest.fn(); // Crea y simula una función para el onSearch
    render(<SearchBar onSearch={mockOnSearch} />); //renderiza

    const input = screen.getByPlaceholderText('write an ID or NAME');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(mockOnSearch).toHaveBeenCalledTimes(1); // Verifica que la función onSearch se haya llamado una vez
    expect(mockOnSearch).toHaveBeenCalledWith('123'); // Verifica que la función onSearch se haya llamado con el valor '123'
  });

  it('llama a la función onSearch cuando se haga clic en el boton SEARCH', () => {
    const mockOnSearch = jest.fn(); // Crea una función mock para onSearch
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('write an ID or NAME');
    fireEvent.change(input, { target: { value: '456' } });

    const button = screen.getByText('SEARCH');
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1); 
    expect(mockOnSearch).toHaveBeenCalledWith('456'); 
  });
});


/*
getByPlaceholderText busca un elemento que tenga el atributo placeholder con un valor específico y lo selecciona
FireEvent se utiliza para simular eventos en componentes renderizados
.change se utiliza para simular el cambio en el valor del campo .change(input, { target: { value: 'New value' } });
.keyPress se utiliza para simular la pulsación de una tecla durante las pruebas.





*/