import React, { createContext, useState } from 'react';

export const MyRecipeContext = createContext(null);

const RecipeContext = ({children}) => {

    const [recipes, setRecipes] = useState([
  {
    "id": "a1b2c3d4",
    "recipe_Url": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "title": "Classic Pancakes",
    "chefName": "Akash Mukherjee",
    "category": "Breakfast",
    "description": "Fluffy, golden pancakes perfect for a cozy breakfast with honey or maple syrup.",
    "ingredients": "- 1½ cups all-purpose flour\n- 3½ tsp baking powder\n- 1 tsp salt\n- 1 tbsp sugar\n- 1¼ cups milk\n- 1 egg\n- 3 tbsp melted butter",
    "instructions": "1. Mix dry ingredients in a bowl.\n2. Add milk, egg, and melted butter.\n3. Stir until smooth.\n4. Pour batter onto hot griddle.\n5. Flip when bubbles form.\n6. Serve warm with syrup."
  },
  {
    "id": "e5f6g7h8",
    "recipe_Url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "title": "Grilled Chicken Salad",
    "chefName": "Priya Das",
    "category": "Lunch",
    "description": "Healthy and flavorful grilled chicken salad tossed with fresh veggies and olive dressing.",
    "ingredients": "- 200g chicken breast\n- 1 cup lettuce\n- ½ cup cherry tomatoes\n- ¼ cup olives\n- 2 tbsp olive oil\n- Salt and pepper to taste",
    "instructions": "1. Grill the chicken until golden brown.\n2. Chop lettuce, tomatoes, and olives.\n3. Slice chicken and mix with veggies.\n4. Drizzle olive oil and season.\n5. Serve chilled or at room temperature."
  },
  {
    "id": "i9j0k1l2",
    "recipe_Url": "https://images.unsplash.com/photo-1581228258201-fe6e5861d1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "title": "Creamy Alfredo Pasta",
    "chefName": "Ravi Sharma",
    "category": "Dinner",
    "description": "Rich and creamy Alfredo pasta made with garlic, butter, and Parmesan cheese.",
    "ingredients": "- 200g fettuccine pasta\n- 2 tbsp butter\n- 3 cloves garlic\n- 1 cup heavy cream\n- ½ cup Parmesan cheese\n- Salt and pepper to taste",
    "instructions": "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and cheese.\n4. Mix in pasta and toss.\n5. Season and serve hot."
  },
  {
    "id": "i9j0k1l2asas",
    "recipe_Url": "https://images.unsplash.com/photo-1581228258201-fe6e5861d1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "title": "Creamy Alfredo Pasta",
    "chefName": "Ravi Sharma",
    "category": "Dinner",
    "description": "Rich and creamy Alfredo pasta made with garlic, butter, and Parmesan cheese.",
    "ingredients": "- 200g fettuccine pasta\n- 2 tbsp butter\n- 3 cloves garlic\n- 1 cup heavy cream\n- ½ cup Parmesan cheese\n- Salt and pepper to taste",
    "instructions": "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and cheese.\n4. Mix in pasta and toss.\n5. Season and serve hot."
  },
  {
    "id": "i9j0k1l2asasasas",
    "recipe_Url": "https://images.unsplash.com/photo-1581228258201-fe6e5861d1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "title": "Creamy Alfredo Pasta",
    "chefName": "Ravi Sharma",
    "category": "Dinner",
    "description": "Rich and creamy Alfredo pasta made with garlic, butter, and Parmesan cheese.",
    "ingredients": "- 200g fettuccine pasta\n- 2 tbsp butter\n- 3 cloves garlic\n- 1 cup heavy cream\n- ½ cup Parmesan cheese\n- Salt and pepper to taste",
    "instructions": "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and cheese.\n4. Mix in pasta and toss.\n5. Season and serve hot."
  },
  {
    "id": "i9j0k1l2asasas",
    "recipe_Url": "https://images.unsplash.com/photo-1581228258201-fe6e5861d1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    "title": "Creamy Alfredo Pasta",
    "chefName": "Ravi Sharma",
    "category": "Dinner",
    "description": "Rich and creamy Alfredo pasta made with garlic, butter, and Parmesan cheese.",
    "ingredients": "- 200g fettuccine pasta\n- 2 tbsp butter\n- 3 cloves garlic\n- 1 cup heavy cream\n- ½ cup Parmesan cheese\n- Salt and pepper to taste",
    "instructions": "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and cheese.\n4. Mix in pasta and toss.\n5. Season and serve hot."
  }
]
);



  return (
    <MyRecipeContext.Provider value={[recipes, setRecipes]}>
        {children}
    </MyRecipeContext.Provider>
  )
}

export default RecipeContext