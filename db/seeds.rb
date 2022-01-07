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

user1 = User.create!(email: "keginzburg@gmail.com", password: "password")
user2 = User.create!(email: "farzam@gmail.com", password: "password")
user3 = User.create!(email: "maddie@gmail.com", password: "password")
user4 = User.create!(email: "victor@gmail.com", password: "password")
user5 = User.create!(email: "demouser@gmail.com", password: "demouser")

profile1 = Profile.create!(user_id: user1.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Kyle")
profile2 = Profile.create!(user_id: user2.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Farzam")
profile3 = Profile.create!(user_id: user3.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Maddie")
profile4 = Profile.create!(user_id: user4.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Victor")
profile5 = Profile.create!(user_id: user5.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tobey")
profile6 = Profile.create!(user_id: user5.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Andrew")
profile7 = Profile.create!(user_id: user5.id, avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", name: "Tom")

action = Genre.create!(genre: "Action")
comedy = Genre.create!(genre: "Comedy")
horror = Genre.create!(genre: "Horror")
drama = Genre.create!(genre: "Drama")


#Action Seeds
spiderman = Video.create!(title: "Spider-Man", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.", year: 2002, runtime: 121, genre_id: action.id)
# spiderman_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman_thumbnail.jpg')
# spiderman.thumbnail.attach(io: spiderman_thumbnail, filename: 'spiderman_thumbnail.jpg')


spiderman2 = Video.create!(title: "Spider-Man 2", description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.", year: 2004, runtime: 127, genre_id: 1)
# spiderman2_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman2_thumbnail.jpg')
# spiderman2.thumbnail.attach(io: spiderman2_thumbnail, filename: 'spiderman2_thumbnail.jpg')

spiderman3 = Video.create!(title: "Spider-Man 3", description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.", year: 2007, runtime: 139, genre_id: 1)
# spiderman3_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman3_thumbnail.jpg')
# spiderman3.thumbnail.attach(io: spiderman3_thumbnail, filename: 'spiderman3_thumbnail.jpg')

amazing_spiderman = Video.create!(title: "The Amazing Spider-Man", description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.", year: 2012, runtime: 136, genre_id: 1)
# amazing_spiderman_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/amazing_spiderman_thumbnail.jpeg')
# amazing_spiderman.thumbnail.attach(io: amazing_spiderman_thumbnail, filename: 'amazing_spiderman_thumbnail.jpeg')

amazing_spiderman2 = Video.create!(title: "The Amazing Spider-Man 2", description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.", year: 2014, runtime: 142, genre_id: 1)
# amazing_spiderman2_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/amazing_spiderman2_thumbnail.jpg')
# amazing_spiderman2.thumbnail.attach(io: amazing_spiderman2_thumbnail, filename: 'amazing_spiderman2_thumbnail.jpg')

spiderman_homecoming = Video.create!(title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", year: 2017, runtime: 133, genre_id: 1)
# spiderman_homecoming_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman_homecoming.jpg')
# spiderman_homecoming.thumbnail.attach(io: spiderman_homecoming_thumbnail, filename: 'spiderman_homecoming.jpg')

# Potential Action Additions

# spiderman_ffh = Video.create!(title: "Spider-Man: Far from Home", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", year: 2019, runtime: 129, genre_id: 1)

# spiderman_nwh = Video.create!(title: "Spider-Man: No Way Home", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", year: 2021, runtime: 148, genre_id: 1)

#Comedy Seeds
school_of_rock = Video.create!(title: "School of Rock", description: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.", year: 2003, runtime: 109, genre_id: 2)

napoleon_dynamite = Video.create!(title: "Napoleon Dynamite", description: "A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home.", year: 2004, runtime: 96, genre_id: 2)

monty_python = Video.create!(title: "Monty Python and the Holy Grail", description: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.", year: 1975, runtime: 91, genre_id: 2)

billy_madison = Video.create!(title: "Billy Madison", description: "In order to inherit his fed up father's hotel empire, an immature and lazy man must repeat grades 1-12 all over again.", year: 1995, runtime: 89, genre_id: 2)

scott_pilgrim = Video.create!(title: "Scott Pilgrim vs. the World", description: "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.", year: 2010, runtime: 112, genre_id: 2)

best_in_show = Video.create!(title: "Best in Show", description: "A behind-the-scenes look into the highly competitive and cut-throat world of dog shows through the eyes of a group of ruthless dog owners.", year: 2000, runtime: 90, genre_id: 2)

#Horror Seeds
hereditary = Video.create!(title: "Hereditary", description: "A grieving family is haunted by tragic and disturbing occurrences.", year: 2018, runtime: 127, genre_id: 3)

the_thing = Video.create!(title: "The Thing", description: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.", year: 1982, runtime: 148, genre_id: 3)

shining = Video.create!(title: "The Shining", description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", year: 1980, runtime: 146, genre_id: 3)

scream = Video.create!(title: "Scream", description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.", year: 1996, runtime: 111, genre_id: 3)

exorcist = Video.create!(title: "The Exorcist", description: "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.", year: 1973, runtime: 122, genre_id: 3)

psycho = Video.create!(title: "Psycho", description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.", year: 1960, runtime: 109, genre_id: 3)

#Drama Seeds
magnolia = Video.create!(title: "Magnolia", description: "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.", year: 1999, runtime: 188, genre_id: 4)

social_network = Video.create!(title: "The Social Network", description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", year: 2010, runtime: 120, genre_id: 4)

pain_glory = Video.create!(title: "Pain and Glory", description: "A film director reflects on the choices he's made in life as the past and present come crashing down around him.", year: 2019, runtime: 113, genre_id: 4)

boyhood = Video.create!(title: "Boyhood", description: "The life of Mason, from early childhood to his arrival at college.", year: 2014, runtime: 165, genre_id: 4)

parasite = Video.create!(title: "Parasite", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", year: 2019, runtime: 132, genre_id: 4)

moonlight = Video.create!(title: "Moonlight", description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.", year: 2016, runtime: 111, genre_id: 4)


