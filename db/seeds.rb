# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Profile.destroy_all
Genre.destroy_all
Video.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")
ActiveRecord::Base.connection.reset_pk_sequence!("genres")
ActiveRecord::Base.connection.reset_pk_sequence!("videos")

User.create!(email: "keginzburg@gmail.com", password: "password")
User.create!(email: "farzam@gmail.com", password: "password")
User.create!(email: "maddie@gmail.com", password: "password")
User.create!(email: "victor@gmail.com", password: "password")
User.create!(email: "demouser@gmail.com", password: "demouser")

Profile.create!(user_id: 1, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Kyle")
Profile.create!(user_id: 2, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Farzam")
Profile.create!(user_id: 3, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Maddie")
Profile.create!(user_id: 4, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Victor")
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tobey")
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Andrew")
Profile.create!(user_id: 5, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tom")

Genre.create!(genre: "Action")
Genre.create!(genre: "Comedy")
Genre.create!(genre: "Horror")
Genre.create!(genre: "Drama")

Video.create!(title: "Spider-Man", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.", year: 2002, runtime: 121, genre_id: 1)
Video.create!(title: "Spider-Man 2", description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.", year: 2004, runtime: 127, genre_id: 1)
Video.create!(title: "Spider-Man 3", description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.", year: 2007, runtime: 139, genre_id: 1)
Video.create!(title: "The Amazing Spider-Man", description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.", year: 2012, runtime: 136, genre_id: 1)
Video.create!(title: "The Amazing Spider-Man 2", description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.", year: 2014, runtime: 142, genre_id: 1)
Video.create!(title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", year: 2017, runtime: 133, genre_id: 1)
Video.create!(title: "Spider-Man: Far from Home
", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", year: 2019, runtime: 129, genre_id: 1)
Video.create!(title: "Spider-Man: No Way Home", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", year: 2021, runtime: 148, genre_id: 1)

Video.create!(title: "Hereditary", description: "A grieving family is haunted by tragic and disturbing occurrences.", year: 2018, runtime: 127, genre_id: 3)
Video.create!(title: "The Thing", description: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.", year: 1982, runtime: 148, genre_id: 3)
Video.create!(title: "The Shining", description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", year: 1980, runtime: 146, genre_id: 3)
Video.create!(title: "Scream", description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.", year: 1996, runtime: 111, genre_id: 3)


# test_file = URI.open('https://webflix-seeds.s3.amazonaws.com/Screen+Shot+2021-12-19+at+4.47.12+PM.png')

# test2.video_file.attach(io: test_file, filename: 'test_video2.mov')