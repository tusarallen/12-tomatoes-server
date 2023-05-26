const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());

const shefCardData = require("./data/chefInfo.json");
const recipedData = require("./data/recipeInfo.json");

app.get("/", (req, res) => {
  res.send("shef-recipe-server is running");
});

app.get("/shefCard", (req, res) => {
  res.send(shefCardData);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const recipies = recipedData.filter((recipe) => recipe.recipe_id == id);
  res.send(recipies);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const shefInfo = shefCardData.find((chef) => chef.recipe_id == id);
  res.send(shefInfo);
});

app.listen(port, () => {
  console.log(`shef-recipe-server is running on port: ${port}`);
});
