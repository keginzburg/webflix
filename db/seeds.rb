# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(email: "keginzburg@gmail.com", password: "password");
User.create(email: "farzam@gmail.com", password: "password");
User.create(email: "maddie@gmail.com", password: "password");
User.create(email: "victor@gmail.com", password: "password");
User.create(email: "alexd@gmail.com", password: "password");