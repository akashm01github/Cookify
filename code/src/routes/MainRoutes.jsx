import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import CreateRecipes from '../pages/CreateRecipes';
import SingleRecipe from '../pages/SingleRecipe';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
            <Route path='/recipes/details/:id' element={<SingleRecipe/>}/>
            <Route path='/create-recipes' element={<CreateRecipes/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes