import React from 'react'
import RecipeCard from './../components/RecipeCard';
import { useContext } from 'react';
import { MyRecipeContext } from './../context/RecipeContext';

const Recipes = () => {
  const [recipes, setRecipes] = useContext(MyRecipeContext);


  const renderData = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe = {recipe} />
  })




  return (
    <div className='px-4 py-8 md:px-4 lg:px-10 lg:py-16   flex flex-wrap gap-9 justify-center'>
      {recipes.length > 0 ? renderData : <h1 className='text-5xl  lg:text-9xl font-family-notFound font-black text-red-500'>No Data Found!</h1>}
    </div>
  )
}

export default Recipes