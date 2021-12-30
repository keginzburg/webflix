# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(email: "keginzburg@gmail.com", password: "password");
User.create(username: "farzam@gmail.com", password: "password");
User.create(username: "maddie@gmail.com", password: "password");
User.create(username: "victor@gmail.com", password: "password");
User.create(username: "alexd@gmail.com", password: "password");