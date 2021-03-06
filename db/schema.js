var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

var MenuItem = mongoose.model('MenuItem', MenuItemSchema)
var Restaurant = mongoose.model('Restaurant', RestaurantSchema)


module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
}
