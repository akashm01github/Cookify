import React from "react";
import { Clock, Users, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {


    const {id, recipe_Url, title, chefName, category, description, ingredients, instructions } = recipe;




    return (
        <Link to={`/recipes/details/${id}`} className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={recipe_Url}
                    alt="Tacos"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <span className="absolute top-3 right-3 bg-white/90 text-green-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow">
                    {category}
                </span>
            </div>

            {/* Info Section */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100 flex justify-between text-gray-600 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>5 min</span>
                </div>
                <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-green-500" />
                    <span>2 Servings</span>
                </div>
                <div className="flex items-center gap-1">
                    <BarChart className="w-4 h-4 text-green-500" />
                    <span>Easy</span>
                </div>
            </div>

            {/* Text Section */}
            <div className="px-3 sm:px-4 py-3 sm:py-4">
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                    {description.slice(0, 50)}..<small className="font-semibold text-sm text-green-600">More</small>
                </p>
                <span
                    className="text-green-600 font-medium text-sm mt-3 inline-block hover:underline"
                >
                    View Recipe
                </span>
            </div>
        </Link>
    );
};

export default RecipeCard;
