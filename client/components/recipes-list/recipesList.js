Meteor.subscribe('recipes');

Template.recipesList.helpers({
  recipes: () => Recipes.find({}, {sort: {submitted: -1}})
});
