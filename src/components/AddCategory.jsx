import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  //Lo que hace la funcion onInputChange es tomar y almacenar el nuevo valor de  inputValue
  const onInputChange = ({target})=>{
    //Contiene el valor del Input 
    setInputValue(target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length<1) return;
    // setCategories(categories=>[inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
