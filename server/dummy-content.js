// Fixture data
if (Recipes.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  for (var i = 0; i < 10; i++) {
    Recipes.insert({
      title: 'Test post #' + i,
      description: 'some description',
      categories: 'category ' + i,
      price: i * 10,
      inMenu: i%2 ? true : false,
      author: sacha.profile.name,
      userId: sacha._id,
      submitted: now - i
    });
  }
}
