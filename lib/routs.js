Router.configure({
  layoutTemplate: 'layout'
});




// SETUP ROUTES

// Posts List
Router.route('recipesList', {path: '/'});

// Post Single Page
Router.route('recipesSingle', {
  path: '/recipes/:_id',
  data: function() {
    return Recipes.findOne(this.params._id);
  }
});

Router.route('submitRecipe', {path: '/submit-recipe'});

Router.route('updateRecipe', {
  path: '/update-recipe/:_id',
  data: function() {
    return Recipes.findOne(this.params._id);
  }
});
