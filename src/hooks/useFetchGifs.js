import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async()=>{
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  //El useEffect hace que lo que este adentro no se vuelva a lanzar a menos
  //que haya ocurrido un cambio en ese componente.
  useEffect(()=>{
    getImages();
  },[ ])  

  return{
      images,
      isLoading
  }
}
