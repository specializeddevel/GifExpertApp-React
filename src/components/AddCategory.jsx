//import PropTypes from 'prop-types';
import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState();
  
  const onInputChange = ({target}) => {    
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
        //evita que se refresque el navegador al hacer el submit del formulario y se pierda el valor capturado
        event.preventDefault();
        //Validamos que al menos se introduzcan dos caracteres, caso contrario se retorna nada
        if (inputValue.trim().length <= 1) return;
        //const setCategorias = {setCategories}
        //Agrega el elemento despues del enter, obtiene las categorias enteriores mediante callback
        //setCategories(categories => [inputValue, ...categories]);      
        onNewCategory(inputValue.trim());
        setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange = { onInputChange }
        />    
    </form>    
  )
}
