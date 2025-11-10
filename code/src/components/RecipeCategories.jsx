import React from 'react';
import { Coffee, Pizza, Wine, Cake } from 'lucide-react';

export default function RecipeCategories() {
  const categories = [
    { name: 'Breakfast', icon: Coffee },
    { name: 'Lunch', icon: Pizza },
    { name: 'Drink', icon: Wine },
    { name: 'Dessert', icon: Cake }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-16">
          Recipes{' '}
          <span className="text-emerald-600">
            categories
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105 "
            >
              <div className="w-56 h-56 rounded-full bg-emerald-50 flex items-center justify-center mb-4 hover:bg-[#EFE9E3] ">
                <category.icon 
                  className="w-20 h-20 text-emerald-700 stroke-[1.5]" 
                />
              </div>
              <h2 className="text-xl font-semibold text-emerald-700">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}