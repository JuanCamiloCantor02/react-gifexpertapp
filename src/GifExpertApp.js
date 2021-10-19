import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifCollection } from './components/GifCollection';


export const GifExpertApp = ({defaultCategories = []}) =>{
    /* const categories = ["Dragon ball Z", "Pokemon", "Un Show Mas"] */

    /* tener una categoria en duro
    const [categories, setCategories] = useState(["venom"]); */
    const [categories, setCategories] = useState(defaultCategories);
    
    /* const handleAdd = () =>{
          setCategories([...categories, "Mr Beats"]);
    } */
    
    return(
      <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
        <hr />

        

       <ol>
           {
               categories.map(category =>{
                   return <GifCollection key={category} category={category} />

               })
           }
       </ol>
  
      </>
    );
  }
  


