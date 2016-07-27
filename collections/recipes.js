Recipes = new Mongo.Collection("recipes");

recipesSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Price'
    },
    description: {
        type: String,
        label: 'description'
    },
    categories: {
        type: String,
        label: 'categories'
    },
    price: {
        type: Number,
        label: 'Price'
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        }
    },
    submitted: {
      type: Date,
      label: "Created At",
      autoValue: function() {
        return new Date()
      },
    }
});
