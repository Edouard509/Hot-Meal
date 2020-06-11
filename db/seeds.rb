# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.destroy_all
Recipe.destroy_all
User.destroy_all

@user = User.create!(username: 'claudyedouard', email: 'claudyedouard6@gmail.com', password:'123456')

@ingrediant = Recipe.create!(name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

Dish.create!(name: 'Mac&Chesse', image:'https://skinnyms.com/wp-content/uploads/2016/04/Creamy-Mac-Cheese-with-Butternut-Squash.jpg', user: @user, recipes:[@ingrediant])  