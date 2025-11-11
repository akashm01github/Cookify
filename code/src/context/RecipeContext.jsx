import React, { createContext, useEffect, useState } from 'react';

export const MyRecipeContext = createContext(null);

const RecipeContext = ({ children }) => {

  const [recipes, setRecipes] = useState([]);


  useEffect(()=>{
    setRecipes(JSON.parse(localStorage.getItem("recipesData")) || []);
  },[])



  return (
    <MyRecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </MyRecipeContext.Provider>
  )
}

export default RecipeContext