const User = require('./User');
const Review = require('./Review');
const Restaurant = require('./Restaurant');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

//! Restaurant relationship
Restaurant.hasMany(Review, {
  foreignKey: 'reviews',
  onDelete: 'CASCADE'
})

module.exports = { User, Review, Restaurant };