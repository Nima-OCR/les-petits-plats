import { recipes } from '/data/recipes.js';


// Fonction pour afficher les détails de chaque recette
function displayData(recipes) {
  recipes.forEach(recipe => {
    console.log('Nom de la recette :', recipe.name);
    console.log('Temps de préparation :', recipe.time);
  });
}

// Appelle à la fonction 'displayData' pour importer les recettes
displayData(recipes);
