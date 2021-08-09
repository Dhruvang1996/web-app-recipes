const RecipeTable = require('../models/recipe');

exports.getRecipes = async (_, res) => {
  try {
    const recipes = await RecipeTable.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await RecipeTable.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
