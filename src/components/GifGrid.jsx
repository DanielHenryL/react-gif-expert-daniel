import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
  
  const { images, isLoading } = useFetchGifs(category); 

  return (
    <>
      <h3>{category}</h3>
      <div >
        {
          isLoading
          ? <h2>Cargando...</h2>
          : null
        }
      </div>
      
      <div className="card-grid ">
        {
          images.map((image)=>(
            <GifItem 
              key={image.id} 
              //manda todos las propiedades de image y ya no es necesario desestructurar cada una para mandarselo
              {...image}
            />
          ))
        }
      </div>
      
    </>
  )
}
