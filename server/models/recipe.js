const mongoose = require('../db');

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
  },
  { timpestamps: true },
);

module.exports = mongoose.model('RecipeTable', recipeSchema);
