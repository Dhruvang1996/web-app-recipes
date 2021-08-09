const router = require('express').Router();

const recipeController = require('./controller/recipeController');

router.get('/', recipeController.getRecipes);
router.post('/', recipeController.createRecipe);

module.exports = router;
