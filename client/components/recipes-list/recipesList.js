Meteor.subscribe('recipes');

Template.recipesList.helpers({

  recipes: () => {
      return Recipes.find({}, {sort: {submitted: -1}});
  }

});
