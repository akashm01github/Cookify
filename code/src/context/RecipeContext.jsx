import React, { createContext, useEffect, useState } from 'react';

export const MyRecipeContext = createContext(null);

const RecipeContext = ({ children }) => {

  const [recipes, setRecipes] = useState([
    {
      "id": "a1b2c3d4",
      "recipe_Url": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      "title": "Classic Pancakes",
      "chefName": "Akash Mukherjee",
      "category": "breakfast",
      "description": "Fluffy, golden pancakes perfect for a cozy breakfast with honey or maple syrup.",
      "ingredients": "- 1½ cups all-purpose flour\n- 3½ tsp baking powder\n- 1 tsp salt\n- 1 tbsp sugar\n- 1¼ cups milk\n- 1 egg\n- 3 tbsp melted butter",
      "instructions": "1. Mix dry ingredients in a bowl.\n2. Add milk, egg, and melted butter.\n3. Stir until smooth.\n4. Pour batter onto hot griddle.\n5. Flip when bubbles form.\n6. Serve warm with syrup."
    },
    {
      "id": "e5f6g7h8",
      "recipe_Url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "title": "Grilled Chicken Salad",
      "chefName": "Priya Das",
      "category": "lunch",
      "description": "Healthy and flavorful grilled chicken salad tossed with fresh veggies and olive dressing.",
      "ingredients": "- 200g chicken breast\n- 1 cup lettuce\n- ½ cup cherry tomatoes\n- ¼ cup olives\n- 2 tbsp olive oil\n- Salt and pepper to taste",
      "instructions": "1. Grill the chicken until golden brown.\n2. Chop lettuce, tomatoes, and olives.\n3. Slice chicken and mix with veggies.\n4. Drizzle olive oil and season.\n5. Serve chilled or at room temperature."
    },
    {
      "id": "i9j0k1l2",
      "recipe_Url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1532",
      "title": "Creamy Alfredo Pasta",
      "chefName": "Ravi Sharma",
      "category": "dinner",
      "description": "Rich and creamy Alfredo pasta made with garlic, butter, and Parmesan cheese.",
      "ingredients": "- 200g fettuccine pasta\n- 2 tbsp butter\n- 3 cloves garlic\n- 1 cup heavy cream\n- ½ cup Parmesan cheese\n- Salt and pepper to taste",
      "instructions": "1. Boil pasta and drain.\n2. Melt butter and sauté garlic.\n3. Add cream and cheese.\n4. Mix in pasta and toss.\n5. Season and serve hot."
    },
    {
      "id": "m3n4o5p6",
      "recipe_Url": "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "title": "Spicy Paneer Tikka",
      "chefName": "Ananya Verma",
      "category": "snacks",
      "description": "A smoky and flavorful Indian appetizer made with marinated paneer cubes grilled to perfection.",
      "ingredients": "- 250g paneer (cubed)\n- 1 cup thick yogurt\n- 1 tbsp ginger-garlic paste\n- 1 tsp red chili powder\n- ½ tsp turmeric powder\n- 1 tsp garam masala\n- 1 tbsp lemon juice\n- Salt to taste\n- 1 tbsp oil",
      "instructions": "1. Mix yogurt and all spices to make a marinade.\n2. Add paneer cubes and coat well.\n3. Marinate for 30 minutes.\n4. Grill or pan-fry until golden brown.\n5. Serve hot with mint chutney and lemon wedges."
    },
     {
      "id": "u1v2w3x4",
      "recipe_Url": "https://images.unsplash.com/photo-1605719161691-5d9771fc144f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2042",
      "title": "Luchi Alur Dom",
      "chefName": "Subhajit Ghosh",
      "category": "breakfast",
      "description": "A comforting Bengali breakfast combo of soft, puffed luchis paired with spicy potato curry — perfect for weekends.",
      "ingredients": "- 2 cups maida (flour)\n- 1 tbsp ghee\n- 4 boiled potatoes\n- 1 onion (chopped)\n- 1 tomato (chopped)\n- 1 tsp cumin seeds\n- 1 tsp garam masala\n- ½ tsp turmeric powder\n- 1 tsp red chili powder\n- Salt to taste\n- Oil for frying",
      "instructions": "1. Make a dough with maida, ghee, and water; rest for 15 mins.\n2. Roll into small circles and deep fry to puffed luchis.\n3. For alur dom, sauté onion and tomato in oil.\n4. Add spices and mashed potatoes.\n5. Cook for 5–7 minutes and serve hot with luchi."
    },
    {
      "id": "c9d0e1f2",
      "recipe_Url": "https://images.unsplash.com/photo-1654863404432-cac67587e25d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "title": "Katla Macher Kaliya",
      "chefName": "Ritwik Chatterjee",
      "category": "dinner",
      "description": "A royal Bengali fish curry made with big pieces of Katla fish simmered in a rich onion-tomato and spice gravy.",
      "ingredients": "- 4 pieces katla fish\n- 2 onions (sliced)\n- 1 tomato (chopped)\n- 1 tbsp ginger-garlic paste\n- 1 tsp cumin powder\n- 1 tsp coriander powder\n- ½ tsp turmeric powder\n- ½ tsp garam masala\n- 2 green chilies\n- Salt and sugar to taste\n- 3 tbsp mustard oil",
      "instructions": "1. Marinate fish with salt and turmeric; fry lightly and keep aside.\n2. In the same oil, sauté onions until golden.\n3. Add ginger-garlic paste and cook for 2 minutes.\n4. Add tomato, cumin, coriander, turmeric, salt, and sugar; cook till oil separates.\n5. Add 1 cup water, bring to a boil, and gently add fried fish.\n6. Simmer for 10 minutes, sprinkle garam masala, and serve with rice."
    },

  ]
  );


  // useEffect(()=>{
  //   setRecipes(JSON.parse(localStorage.getItem("recipesData")) || []);
  // },[])



  return (
    <MyRecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </MyRecipeContext.Provider>
  )
}

export default RecipeContext