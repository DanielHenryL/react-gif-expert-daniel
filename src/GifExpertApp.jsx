import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece','Demon Slayer']);

  const onAddCategory = (newCategory)=>{
    const NewCategoryUpperCase = newCategory.toUpperCase();
    if(categories.includes(NewCategoryUpperCase)) return;
    setCategories([NewCategoryUpperCase,...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      
      {categories.map(category=>
        (
          <GifGrid 
            key={category}
            category={category}
          />
        )
      )}
    </>
  )
}
///home/daniel/ProyectosDaniel/CursoReact/04-gif-expert-app/dist