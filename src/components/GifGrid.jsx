import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

const {images, isLoading} = useFetchGifs( category );

// Esto todo se llevo al custom Hook useFetchGifs
//  const [images, setImages] = useState([]);

//  const getImages = async() => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
//  }

//  //useefect sirve para disparar efectos secundarios cuando algo pase
//  useEffect( () => {
//     //aqui va lo que se quiere ejecutar
//     getImages();
//  }, 
//     //aqui se definen las dependencias o condiciones que haran que se dispare este hook
//     //Si se deja como un arreglo vacio, quiere decir que se ejecutara el hook solo la primera vez
//     []);


  return (
    <>
        <h3>{ category }</h3>
        {
          //Si isloading esta en true muestra el mensaje si no entonces no hace nada
          //Se usa el if corto o if logico && esta explicado en la introduccion de JS
          isLoading && ( <h2>Cargando...</h2> )
        }
        {/* Las clases en JSX se llaman con className este es el sinonimo de class del HTML tradicional  */}
        <div className="card-grid">          
          {
            //AQUI SE MUESTRA EL TITULO DE LA IMAGEN
                // images.map( img => (
                //         <li key={img.id}>{img.title}</li>
                // ))
                //Lo mismo con desestructuracion
                images.map( (image) => (                        
                        <GifItem 
                          key={ image.id }
                          //esparcimiento de las propiedades de image, para poder enviarlas todas una por una como propiedades
                          { ...image } 
                        />
                ))
          }          
        </div>
    </>
    
  )
}
