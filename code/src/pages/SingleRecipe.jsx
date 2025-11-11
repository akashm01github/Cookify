import React, { useContext, useEffect, useState } from "react";
import { ChefHat, ImageIcon, Book, UtensilsCrossed } from "lucide-react";
import { useForm } from "react-hook-form";
import { MyRecipeContext } from "../context/RecipeContext";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRecipe = () => {

    const param = useParams();

    const [recipes, setRecipes] = useContext(MyRecipeContext);

    const recipeData = recipes.find((r) => r.id == param.id);


    const navigate = useNavigate();


    


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: recipeData?.title,
            description: recipeData?.description,
            chefName: recipeData?.chefName,
            ingredients: recipeData?.ingredients,
            instructions: recipeData?.instructions,
            category: recipeData?.category,
            recipe_Url: recipeData?.recipe_Url,

        }
    })



    const updateHandeler = (newRecipedata) => {
        const index = recipes.findIndex((r) => r.id == param.id)
        const copyData = [...recipes];

        copyData[index] = { ...copyData[index], ...newRecipedata }

        setRecipes(copyData);

        localStorage.setItem("recipesData",JSON.stringify(copyData));


        toast.success(`Recipe Updated`)
    };


    const DeleteHandeler = () => {
        const filterData = recipes.filter((r) => r.id !== param.id);

        setRecipes(filterData);

        localStorage.setItem("recipesData",JSON.stringify(filterData));

        console.log(`Data Deleted`)

        navigate('/recipes');

        toast.error('Recipe Deleted')
    }

   const [favourite, setfavourite] = useState(JSON.parse(localStorage.getItem("fav")) || []);



    const FavHandeler = ()=>{
        const copyFav = [...favourite];

        
        copyFav.push(recipeData);

        
        setfavourite(copyFav);

        
        localStorage.setItem("fav", JSON.stringify(copyFav));

        navigate('/fav')

    }

    const UnFavHandeler = ()=>{
         
        const filterFav = favourite.filter((f) => f.id != recipeData.id);

        
        setfavourite(filterFav);

        
        localStorage.setItem("fav", JSON.stringify(filterFav));

        navigate('/fav');
    }

     useEffect(() => {
    }, [favourite,UnFavHandeler,FavHandeler]);

    return (
        <div className="px-4 py-8 sm:p-4 md:p-6 lg:px-10 lg:py-10  min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* -------- LEFT SIDE: Recipe Details -------- */}
                <div className="bg-white shadow-lg rounded-xl sm:rounded-2xl overflow-hidden relative">
                    <img
                        src={recipeData?.recipe_Url}
                        alt="Recipe"
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-56 object-cover"
                    />
                    <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                            {recipeData?.title}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-500">
                            By Chef {recipeData?.chefName}
                        </p>

                        <div className="flex gap-2 items-center text-xs sm:text-sm md:text-base text-orange-600 font-semibold">
                            <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" /> {recipeData?.category.toUpperCase()}
                        </div>

                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {recipeData?.description}
                        </p>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base md:text-lg">
                                Ingredients:
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base space-y-1">
                                {recipeData?.ingredients}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base md:text-lg">
                                Instructions:
                            </h3>
                            <ol className="list-decimal list-inside text-gray-600 text-xs sm:text-sm md:text-base space-y-1">
                                {recipeData?.instructions}
                            </ol>
                        </div>
                    </div>

                    {/* Favourite and Unfavourite */}

                    <div className="flex justify-end p-3 items-center w-30 h-20 absolute top-0 right-0">
                                {favourite.find((f)=>f.id == recipeData.id) ? ( <i onClick={UnFavHandeler} className="ri-heart-3-fill text-2xl sm:text-3xl md:text-5xl text-red-500 absolute"></i>) : ( <i onClick={FavHandeler} className="ri-heart-3-line text-2xl sm:text-3xl md:text-5xl absolute"></i>)}
                               
                    </div>
                </div>

                {/* -------- RIGHT SIDE: Recipe Form -------- */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-linear-to-r from-green-500 to-teal-500 p-4 sm:p-5 md:p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold font-[Playwrite_HU]">
                                Edit Your Recipe
                            </h1>
                        </div>
                        <p className="text-orange-100 text-xs sm:text-sm md:text-base">
                            Share your culinary masterpiece
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(updateHandeler)} className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5">
                        {/* Image URL */}
                        <div>
                            <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2">
                                <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                Recipe Image URL
                            </label>
                            <input
                                {...register("recipe_Url")}
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                            />
                        </div>

                        {/* Title + Chef Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2">
                                    <Book className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                    Recipe Title
                                </label>
                                <input
                                    {...register("title")}
                                    type="text"
                                    placeholder="Enter recipe title"
                                    className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2">
                                    <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                    Chef Name
                                </label>
                                <input
                                    {...register("chefName")}
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2">
                                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                Select Category
                            </label>
                            <select
                                {...register("category")}
                                className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 bg-white focus:border-orange-500 outline-none transition text-sm sm:text-base"
                            >
                                <option value="">Choose a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 block">
                                Description
                            </label>
                            <textarea
                                {...register("description")}
                                placeholder="Write a short description..."
                                rows="3"
                                className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition resize-none text-sm sm:text-base"
                            ></textarea>
                        </div>

                        {/* Ingredients + Instructions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 block">
                                    Ingredients
                                </label>
                                <textarea
                                    {...register("ingredients")}
                                    placeholder="- 2 cups flour&#10;- 1 cup sugar&#10;- 3 eggs"
                                    rows="6"
                                    className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition resize-none font-mono text-xs sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-2 block">
                                    Instructions
                                </label>
                                <textarea
                                    {...register("instructions")}
                                    placeholder="1. Preheat oven&#10;2. Mix ingredients&#10;3. Bake 30 min"
                                    rows="6"
                                    className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:border-orange-500 outline-none transition resize-none text-xs sm:text-sm"
                                ></textarea>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                            <button className="w-full bg-linear-to-r from-green-500 to-teal-500 text-white font-bold py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition transform shadow-md text-sm sm:text-base">
                                Update Recipe
                            </button>
                            <button onClick={() => DeleteHandeler()} type="button" className="w-full bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-2.5 sm:py-3 md:py-3.5 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition transform shadow-md text-sm sm:text-base">
                                Delete Recipe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;