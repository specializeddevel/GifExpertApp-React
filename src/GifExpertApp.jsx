//Importamos useState para utilizar el componente usestate de React
import { useState } from 'react'
//se usa el archivo de barril (index.js) para poder importar en una linea mas de un componente
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
        // Valida que no se introduzcan valores duplicados
        if (categories.includes(newCategory)) return;
        //  setCategories((c) => {
        //      c.push('valorant');
        //  });   
        //console.log(newCategory);
        setCategories([newCategory, ...categories ]);
        
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            < AddCategory
            
                onNewCategory={(valueNewCategory) => onAddCategory(valueNewCategory)}
            />
            {
                categories.map( category => (
                        <GifGrid
                            key={category} 
                            category= {category}/>
                    )
                )
            }
            
        </>
    )
}



