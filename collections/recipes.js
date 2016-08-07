Recipes = new Mongo.Collection("recipes");


Recipes.allow({
  insert: function(userId, doc) {
    // разрешить постить только если пользователь залогинен
    return !! userId;
  },
  update: function(userId, doc) {
    // разрешить постить только если пользователь залогинен
    return !! userId;
  }
});

ingredient = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  amount: {
    type: Number,
    label: "Quantity"
  },
  units: {
    type: String,
    label: "Units"
  }
});

recipesSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [ingredient]
  },
  categories: {
    type: String,
    label: "Categories"
  },
  price: {
    type: Number,
    label: "Price"
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  submitted: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Recipes.attachSchema(recipesSchema);
