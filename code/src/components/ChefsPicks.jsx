import React, { useState } from 'react';
import { ChefHat, Clock, Users, Star } from 'lucide-react';

const ChefsPicks = () => {
  const [recipes] = useState([
    {
      id: 1,
      name: "Truffle Risotto",
      image: "https://images.unsplash.com/photo-1747628857843-96f695316cfc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      chef: "Chef Maria",
      time: "45 min",
      servings: 4,
      rating: 4.9,
      description: "Creamy Arborio rice infused with aromatic truffle oil and Parmesan",
      difficulty: "Medium"
    },
    {
      id: 2,
      name: "Seared Salmon Bowl",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop",
      chef: "Chef James",
      time: "30 min",
      servings: 2,
      rating: 4.8,
      description: "Pan-seared salmon with quinoa, avocado, and sesame ginger dressing",
      difficulty: "Easy"
    },
   {
    id: 1,
    name: "Creamy Garlic Pasta",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop",
    chef: "Chef Amelia",
    time: "25 min",
    servings: 2,
    rating: 4.7,
    description: "Rich and creamy garlic sauce tossed with fettuccine pasta and parmesan.",
    difficulty: "Easy"
  },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop",
      chef: "Chef Sophie",
      time: "25 min",
      servings: 4,
      rating: 4.9,
      description: "Decadent molten chocolate center with a crispy exterior",
      difficulty: "Medium"
    },
     {
    id: 5,
    name: "Margarita Pizza",
    image: "https://images.unsplash.com/photo-1623145289269-27a09a746b9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    chef: "Chef Marco",
    time: "40 min",
    servings: 4,
    rating: 4.9,
    description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
    difficulty: "Medium"
  },
  {
    id: 6,
    name: "Berry Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&auto=format&fit=crop",
    chef: "Chef Sophia",
    time: "10 min",
    servings: 1,
    rating: 4.7,
    description: "Refreshing smoothie bowl with mixed berries, banana, and granola toppings.",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Grilled Chicken Skewers",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop",
    chef: "Chef Arjun",
    time: "35 min",
    servings: 3,
    rating: 4.6,
    description: "Juicy chicken skewers marinated in lemon, herbs, and olive oil — grilled to perfection.",
    difficulty: "Medium"
  },
   {
    id: 1,
    name: "Creamy Garlic Pasta",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop",
    chef: "Chef Amelia",
    time: "25 min",
    servings: 2,
    rating: 4.7,
    description: "Rich and creamy garlic sauce tossed with fettuccine pasta and parmesan.",
    difficulty: "Easy"
  },
  ]);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'bg-green-100 text-green-700',
      'Medium': 'bg-yellow-100 text-yellow-700',
      'Hard': 'bg-red-100 text-red-700'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-linear-to-br  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-orange-500 to-red-500 rounded-full mb-4 shadow-lg">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Chef's Picks
          </h1>
          <p className="text-xl text-gray-600 italic">
            Handpicked by our Chef
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{recipe.rating}</span>
                </div>
                <div className={`absolute top-3 left-3 ${getDifficultyColor(recipe.difficulty)} rounded-full px-3 py-1 text-xs font-semibold shadow-md`}>
                  {recipe.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {recipe.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Chef Badge */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{recipe.chef}</span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-linear-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefsPicks;