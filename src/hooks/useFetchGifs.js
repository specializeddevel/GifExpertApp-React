import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook es una funcion que retorna un opbjeto con sus propiedades
export const useFetchGifs = ( category ) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    //useefect sirve para disparar efectos secundarios cuando algo pase
    useEffect( () => {
        //aqui va lo que se quiere ejecutar
        getImages();
        setIsLoading(false);
    }, 
        //aqui se definen las dependencias o condiciones que haran que se dispare este hook
        //Si se deja como un arreglo vacio, quiere decir que se ejecutara el hook solo la primera vez
        []); 
        
  return {
    images: images,
    isLoading: isLoading
    // puede ser solo isLoading
  }
}
