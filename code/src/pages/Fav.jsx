import React from 'react'
import RecipeCard from '../components/RecipeCard';
import { Heart } from 'lucide-react';

const Fav = () => {
    const fav = JSON.parse(localStorage.getItem("fav")) || [];

    const renderData = fav.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
    })

    return (
        <div className='min-h-screen bg-linear-to-br from-rose-50 via-white to-red-50'>
            <div className='px-4 py-8 md:px-6 lg:px-10 lg:py-12'>
                {/* Header */}
                <div className='max-w-7xl mx-auto mb-8'>
                    <div className='flex items-center gap-3 mb-2'>
                        <Heart className='w-8 h-8 text-red-500 fill-red-500' />
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                            My Favorites
                        </h1>
                    </div>
                    <p className='text-gray-600 ml-11'>
                        {fav.length > 0 ? `${fav.length} saved ${fav.length === 1 ? 'recipe' : 'recipes'}` : 'No recipes saved yet'}
                    </p>
                </div>

                {/* Content */}
                {fav.length > 0 ? (
                    <div className='max-w-7xl mx-auto flex flex-wrap gap-6 justify-center lg:justify-start'>
                        {renderData}
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center py-20 px-4'>
                        <div className='bg-white rounded-full p-8 shadow-lg mb-6'>
                            <Heart className='w-20 h-20 text-gray-300' />
                        </div>
                        <h2 className='text-3xl md:text-5xl font-bold text-gray-800 mb-3 text-center'>
                            No Favorites Yet
                        </h2>
                        <p className='text-gray-500 text-lg text-center max-w-md'>
                            Start exploring and save your favorite recipes to see them here
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Fav