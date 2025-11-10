import React from 'react'

import chefImg from "/chefImage.png"; // replace with your image path
import { useNavigate } from 'react-router-dom';

const RecipeHero = () => {


    const navigate  = useNavigate();




  return (
     <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 bg-white">
      
      {/* Left Content */}
      <div className="max-w-xl space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-family-dancing md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
          Cook Like a Pro with <br />
          Our <span className="text-orange-500">Easy</span> and{" "}
          <span className="text-orange-500">Tasty</span> Recipes
        </h1>

        <p className="text-gray-500 text-sm md:text-base">
          From quick and easy meals to gourmet delights, we have something for every taste and occasion.
        </p>

        <button onClick={()=>{navigate('/recipes')}} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold text-sm lg:text-2xl px-6 py-3 rounded-lg transition duration-300 shadow-md">
          Explore all Recipes
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center rounded-full">
        <img
          src={chefImg}
          className="w-72 md:w-96 lg:w-[450px] drop-shadow-lg rounded-2xl"
        />
      </div>
    </section>
  )
}

export default RecipeHero