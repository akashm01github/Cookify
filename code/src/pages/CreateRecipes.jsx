import { ChefHat, ImageIcon, Book, UtensilsCrossed } from 'lucide-react';
import React from 'react'

import { useForm } from "react-hook-form"

import { nanoid } from 'nanoid'
import { useContext } from 'react';
import { MyRecipeContext } from '../context/RecipeContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipes = () => {

  const [recipes, setRecipes] = useContext(MyRecipeContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const submitHandeler = (data) => {
    data.id = nanoid();

    const copyData = [...recipes];

    copyData.push(data);

    setRecipes(copyData);


    localStorage.setItem("recipesData",JSON.stringify(copyData));

    navigate('/recipes');

    toast.success(`${data.title} Recipe Created`);

  }










  return (
    <div className='p-2 md:px-4 lg:px-10 lg:py-4'>
      <div className="min-h-screen  from-orange-50 via-amber-50 to-yellow-50 py-6 sm:py-12 px-3 sm:px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-linear-to-r from-orange-500 to-amber-500 p-4 sm:p-6 lg:p-8 text-white">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <ChefHat className="w-7 h-7 sm:w-10 sm:h-10" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-family-dancing">Create Recipe</h1>
              </div>
              <p className="text-sm sm:text-base text-orange-100">Share your culinary masterpiece with the world</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(submitHandeler)} className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                {/* Image URL */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    Recipe Image URL
                  </label>
                  <input
                    {...register("recipe_Url")}
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Recipe Title and Chef Name - Side by side on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Recipe Title */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <Book className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                      Recipe Title
                    </label>
                    <input
                      {...register("title")}
                      type="text"
                      placeholder="Enter recipe title"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Chef Name */}
                  <div>
                    <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                      Chef Name
                    </label>
                    <input
                      {...register("chefName")}
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Category Select */}
                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    Select Category
                  </label>
                  <select
                    {...register("category")}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-white">
                    <option value="">Choose a category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 block">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    placeholder="Write a brief description of your recipe..."
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Ingredients and Instructions - Side by side on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Ingredients */}
                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 block">
                      Ingredients
                    </label>
                    <textarea
                      {...register("ingredients")}
                      placeholder="List ingredients:&#10;- 2 cups flour&#10;- 1 cup sugar&#10;- 3 eggs"
                      rows="8"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none font-mono"
                    ></textarea>
                  </div>

                  {/* Instructions */}
                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 block">
                      Instructions
                    </label>
                    <textarea
                      {...register("instructions")}
                      placeholder="Step-by-step:&#10;1. Preheat oven&#10;2. Mix ingredients&#10;3. Bake for 30 min"
                      rows="8"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Create Recipe Button */}
                <button className="w-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold py-3 sm:py-4 text-sm sm:text-base rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                  Create Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateRecipes