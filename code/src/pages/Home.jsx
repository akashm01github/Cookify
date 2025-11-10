import React from 'react'
import RecipeHero from '../components/RecipeHero'
import RecipeCategories from '../components/RecipeCategories'
import ChefsPicks from '../components/ChefsPicks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <RecipeHero />
      <RecipeCategories />
      <ChefsPicks/>
      <Testimonials/>
    </div>
  )
}

export default Home