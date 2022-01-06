# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")

User.create!(email: "keginzburg@gmail.com", password: "password");
User.create!(email: "farzam@gmail.com", password: "password");
User.create!(email: "maddie@gmail.com", password: "password");
User.create!(email: "victor@gmail.com", password: "password");
User.create!(email: "demouser@gmail.com", password: "demouser");

Profile.create!(user_id: 1, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Kyle");
Profile.create!(user_id: 2, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Farzam");
Profile.create!(user_id: 3, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Maddie");
Profile.create!(user_id: 4, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Victor");
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tobey");
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Andrew");
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tom");
