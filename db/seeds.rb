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
Mylist.destroy_all
Like.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")
ActiveRecord::Base.connection.reset_pk_sequence!("genres")
ActiveRecord::Base.connection.reset_pk_sequence!("videos")
ActiveRecord::Base.connection.reset_pk_sequence!("mylists")
ActiveRecord::Base.connection.reset_pk_sequence!("likes")

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

# Action Videos
# Spider-Man
spiderman = Video.create!(title: "Spider-Man", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.", year: 2002, runtime: 121, genre_id: action.id)

spiderman_thumbnail = URI.open("https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman_thumbnail.jpg")
spiderman.thumbnail.attach(io: spiderman_thumbnail, filename: "spiderman_thumbnail.jpg")
spiderman_background = URI.open("https://webflix-seeds.s3.amazonaws.com/backgrounds/spiderman_background.jpg")
spiderman.background.attach(io: spiderman_background, filename: "spiderman_background.jpg")
spiderman_trailer = URI.open("https://webflix-seeds.s3.amazonaws.com/trailers/spiderman_trailer.mp4")
spiderman.trailer.attach(io: spiderman_trailer, filename: "spiderman_trailer.mp4")

# Spider-Man 2
spiderman2 = Video.create!(title: "Spider-Man 2", description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.", year: 2004, runtime: 127, genre_id: 1)

spiderman2_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman2_thumbnail.jpg')
spiderman2.thumbnail.attach(io: spiderman2_thumbnail, filename: 'spiderman2_thumbnail.jpg')
spiderman2_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/spiderman2_background.jpeg')
spiderman2.background.attach(io: spiderman2_background, filename: 'spiderman2_background.jpeg')
spiderman2_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/spiderman2_trailer.mp4')
spiderman2.trailer.attach(io: spiderman2_trailer, filename: 'spiderman2_trailer.mp4')

# # Spider-Man 3
spiderman3 = Video.create!(title: "Spider-Man 3", description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.", year: 2007, runtime: 139, genre_id: 1)

spiderman3_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman3_thumbnail.jpg')
spiderman3.thumbnail.attach(io: spiderman3_thumbnail, filename: 'spiderman3_thumbnail.jpg')
spiderman3_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/spiderman3_background.jpg')
spiderman3.background.attach(io: spiderman3_background, filename: 'spiderman3_background.jpg')
spiderman3_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/spiderman3_trailer.mp4')
spiderman3.trailer.attach(io: spiderman3_trailer, filename: 'spiderman3_trailer.mp4')

# # The Amazing Spider-Man
amazing_spiderman = Video.create!(title: "The Amazing Spider-Man", description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.", year: 2012, runtime: 136, genre_id: 1)

amazing_spiderman_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/amazing_spiderman_thumbnail.jpeg')
amazing_spiderman.thumbnail.attach(io: amazing_spiderman_thumbnail, filename: 'amazing_spiderman_thumbnail.jpeg')
amazing_spiderman_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/amazing_spiderman_background.jpg')
amazing_spiderman.background.attach(io: amazing_spiderman_background, filename: 'amazing_spiderman_background.jpg')
amazing_spiderman_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/amazing_spiderman_trailer.mp4')
amazing_spiderman.trailer.attach(io: amazing_spiderman_trailer, filename: 'amazing_spiderman_trailer.mp4')

# # The Amazing Spider-Man 2
amazing_spiderman2 = Video.create!(title: "The Amazing Spider-Man 2", description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.", year: 2014, runtime: 142, genre_id: 1)

amazing_spiderman2_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/amazing_spiderman2_thumbnail.jpg')
amazing_spiderman2.thumbnail.attach(io: amazing_spiderman2_thumbnail, filename: 'amazing_spiderman2_thumbnail.jpg')
amazing_spiderman2_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/amazing_spiderman2_background.jpg')
amazing_spiderman2.background.attach(io: amazing_spiderman2_background, filename: 'amazing_spiderman2_background.jpg')
amazing_spiderman2_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/amazing_spiderman2_trailer.mp4')
amazing_spiderman2.trailer.attach(io: amazing_spiderman2_trailer, filename: 'amazing_spiderman2_trailer.mp4')

# # Spiderman: Homecoming
spiderman_homecoming = Video.create!(title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", year: 2017, runtime: 133, genre_id: 1)

spiderman_homecoming_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/spiderman_homecoming.jpg')
spiderman_homecoming.thumbnail.attach(io: spiderman_homecoming_thumbnail, filename: 'spiderman_homecoming.jpg')
spiderman_homecoming_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/spiderman_homecoming_background.jpg')
spiderman_homecoming.background.attach(io: spiderman_homecoming_background, filename: 'spiderman_homecoming_background.jpg')
spiderman_homecoming_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/spiderman_homecoming_trailer.mp4')
spiderman_homecoming.trailer.attach(io: spiderman_homecoming_trailer, filename: 'spiderman_homecoming_trailer.mp4')

# # Potential Action Additions:

# # Spider-Man: Far From Home
# # spiderman_ffh = Video.create!(title: "Spider-Man: Far from Home", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", year: 2019, runtime: 129, genre_id: 1)

# # Spider-Man: No Way Home
# # spiderman_nwh = Video.create!(title: "Spider-Man: No Way Home", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", year: 2021, runtime: 148, genre_id: 1)

# # Comedy Seeds
# # School of Rock
school_of_rock = Video.create!(title: "School of Rock", description: "After being kicked out of his rock band, Dewey Finn becomes a substitute teacher of an uptight elementary private school, only to try and turn his class into a rock band.", year: 2003, runtime: 109, genre_id: 2)

school_of_rock_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/school_of_rock_thumbnail.jpg')
school_of_rock.thumbnail.attach(io: school_of_rock_thumbnail, filename: 'school_of_rock_thumbnail.jpg')
school_of_rock_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/school_of_rock_background.jpg')
school_of_rock.background.attach(io: school_of_rock_background, filename: 'school_of_rock_background.jpg')
school_of_rock_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/school_of_rock_trailer.mp4')
school_of_rock.trailer.attach(io: school_of_rock_trailer, filename: 'school_of_rock_trailer.mp4')

# # Napoleon Dynamite
napoleon_dynamite = Video.create!(title: "Napoleon Dynamite", description: "A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home.", year: 2004, runtime: 96, genre_id: 2)

napoleon_dynamite_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/napoleon_dynamite_thumbnail.jpg')
napoleon_dynamite.thumbnail.attach(io: napoleon_dynamite_thumbnail, filename: 'napoleon_dynamite_thumbnail.jpg')
napoleon_dynamite_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/napoleon_dynamite_background.jpg')
napoleon_dynamite.background.attach(io: napoleon_dynamite_background, filename: 'napoleon_dynamite_background.jpg')
napoleon_dynamite_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/napoleon_dynamite_trailer.mp4')
napoleon_dynamite.trailer.attach(io: napoleon_dynamite_trailer, filename: 'napoleon_dynamite_trailer.mp4')

# # Monty Python and the Holy Grail
monty_python = Video.create!(title: "Monty Python and the Holy Grail", description: "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.", year: 1975, runtime: 91, genre_id: 2)

monty_python_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/monty_python_thumbnail.jpg')
monty_python.thumbnail.attach(io: monty_python_thumbnail, filename: 'monty_python_thumbnail.jpg')
monty_python_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/monty_python_background.jpeg')
monty_python.background.attach(io: monty_python_background, filename: 'monty_python_background.jpeg')
monty_python_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/monty_python_trailer.mp4')
monty_python.trailer.attach(io: monty_python_trailer, filename: 'monty_python_trailer.mp4')

# # Billy Madison
billy_madison = Video.create!(title: "Billy Madison", description: "In order to inherit his fed up father's hotel empire, an immature and lazy man must repeat grades 1-12 all over again.", year: 1995, runtime: 89, genre_id: 2)

billy_madison_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/billy_madison_thumbnail.jpg')
billy_madison.thumbnail.attach(io: billy_madison_thumbnail, filename: 'billy_madison_thumbnail.jpg')
billy_madison_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/billy_madison_background.jpg')
billy_madison.background.attach(io: billy_madison_background, filename: 'billy_madison_background.jpg')
billy_madison_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/billy_madison_trailer.mp4')
billy_madison.trailer.attach(io: billy_madison_trailer, filename: 'billy_madison_trailer.mp4')

# # Scott Pilgrim vs the World
scott_pilgrim = Video.create!(title: "Scott Pilgrim vs. the World", description: "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.", year: 2010, runtime: 112, genre_id: 2)

scott_pilgrim_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/scott_pilgrim_thumbnail.jpg')
scott_pilgrim.thumbnail.attach(io: scott_pilgrim_thumbnail, filename: 'scott_pilgrim_thumbnail.jpg')
scott_pilgrim_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/scott_pilgrim_background.jpg')
scott_pilgrim.background.attach(io: scott_pilgrim_background, filename: 'scott_pilgrim_background.jpg')
scott_pilgrim_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/scott_pilgrim_trailer.mp4')
scott_pilgrim.trailer.attach(io: scott_pilgrim_trailer, filename: 'scott_pilgrim_trailer.mp4')

# # Best in Show
best_in_show = Video.create!(title: "Best in Show", description: "A behind-the-scenes look into the highly competitive and cut-throat world of dog shows through the eyes of a group of ruthless dog owners.", year: 2000, runtime: 90, genre_id: 2)

best_in_show_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/best_in_show_thumbnail.jpg')
best_in_show.thumbnail.attach(io: best_in_show_thumbnail, filename: 'best_in_show_thumbnail.jpg')
best_in_show_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/best_in_show_background.jpg')
best_in_show.background.attach(io: best_in_show_background, filename: 'best_in_show_background.jpg')
best_in_show_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/best_in_show_trailer.mp4')
best_in_show.trailer.attach(io: best_in_show_trailer, filename: 'best_in_show_trailer.mp4')

# # Horror Seeds
# # Hereditary
hereditary = Video.create!(title: "Hereditary", description: "A grieving family is haunted by tragic and disturbing occurrences.", year: 2018, runtime: 127, genre_id: 3)

hereditary_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/hereditary_thumbnail.jpg')
hereditary.thumbnail.attach(io: hereditary_thumbnail, filename: 'hereditary_thumbnail.jpg')
hereditary_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/hereditary_background.jpeg')
hereditary.background.attach(io: hereditary_background, filename: 'hereditary_background.jpeg')
hereditary_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/hereditary_trailer.mp4')
hereditary.trailer.attach(io: hereditary_trailer, filename: 'hereditary_trailer.mp4')

# # The Thing
the_thing = Video.create!(title: "The Thing", description: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.", year: 1982, runtime: 148, genre_id: 3)

the_thing_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/the_thing_thumbnail.jpeg')
the_thing.thumbnail.attach(io: the_thing_thumbnail, filename: 'the_thing_thumbnail.jpeg')
the_thing_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/the_thing_background.jpeg')
the_thing.background.attach(io: the_thing_background, filename: 'the_thing_background.jpeg')
the_thing_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/the_thing_trailer.mp4')
the_thing.trailer.attach(io: the_thing_trailer, filename: 'the_thing_trailer.mp4')

# # The Shining
shining = Video.create!(title: "The Shining", description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", year: 1980, runtime: 146, genre_id: 3)

shining_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/shining_thumbnail.jpeg')
shining.thumbnail.attach(io: shining_thumbnail, filename: 'shining_thumbnail.jpeg')
shining_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/shining_background.jpeg')
shining.background.attach(io: shining_background, filename: 'shining_background.jpeg')
shining_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/shining_trailer.mp4')
shining.trailer.attach(io: shining_trailer, filename: 'shining_trailer.mp4')

# # Scream
scream = Video.create!(title: "Scream", description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.", year: 1996, runtime: 111, genre_id: 3)

scream_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/scream_thumbnail.jpeg')
scream.thumbnail.attach(io: scream_thumbnail, filename: 'scream_thumbnail.jpeg')
scream_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/scream_background.jpeg')
scream.background.attach(io: scream_background, filename: 'scream_background.jpeg')
scream_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/scream_trailer.mp4')
scream.trailer.attach(io: scream_trailer, filename: 'scream_trailer.mp4')

# # The Exorcist
exorcist = Video.create!(title: "The Exorcist", description: "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.", year: 1973, runtime: 122, genre_id: 3)

exorcist_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/exorcist_thumbnail.jpeg')
exorcist.thumbnail.attach(io: exorcist_thumbnail, filename: 'exorcist_thumbnail.jpeg')
exorcist_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/exorcist_background.jpg')
exorcist.background.attach(io: exorcist_background, filename: 'exorcist_background.jpg')
exorcist_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/exorcist_trailer.mp4')
exorcist.trailer.attach(io: exorcist_trailer, filename: 'exorcist_trailer.mp4')

# # Psycho
psycho = Video.create!(title: "Psycho", description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.", year: 1960, runtime: 109, genre_id: 3)

psycho_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/psycho_thumbnail.jpeg')
psycho.thumbnail.attach(io: psycho_thumbnail, filename: 'psycho_thumbnail.jpeg')
psycho_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/psycho_background.jpeg')
psycho.background.attach(io: psycho_background, filename: 'psycho_background.jpeg')
psycho_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/psycho_trailer.mp4')
psycho.trailer.attach(io: psycho_trailer, filename: 'psycho_trailer.mp4')

# # Drama Seeds
# # Magnolia
magnolia = Video.create!(title: "Magnolia", description: "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.", year: 1999, runtime: 188, genre_id: 4)

magnolia_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/magnolia_thumbnail.jpg')
magnolia.thumbnail.attach(io: magnolia_thumbnail, filename: 'magnolia_thumbnail.jpg')
magnolia_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/magnolia_background.jpeg')
magnolia.background.attach(io: magnolia_background, filename: 'magnolia_background.jpeg')
magnolia_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/magnolia_trailer.mp4')
magnolia.trailer.attach(io: magnolia_trailer, filename: 'magnolia_trailer.mp4')

# # The Social Network
social_network = Video.create!(title: "The Social Network", description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", year: 2010, runtime: 120, genre_id: 4)

social_network_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/social_network_thumbnail.jpeg')
social_network.thumbnail.attach(io: social_network_thumbnail, filename: 'social_network_thumbnail.jpeg')
social_network_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/social_network_background.png')
social_network.background.attach(io: social_network_background, filename: 'social_network_background.png')
social_network_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/social_network_trailer.mp4')
social_network.trailer.attach(io: social_network_trailer, filename: 'social_network_trailer.mp4')

# # Pain and Glory
pain_glory = Video.create!(title: "Pain and Glory", description: "A film director reflects on the choices he's made in life as the past and present come crashing down around him.", year: 2019, runtime: 113, genre_id: 4)

pain_glory_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/pain_glory_thumbnail.jpeg')
pain_glory.thumbnail.attach(io: pain_glory_thumbnail, filename: 'pain_glory_thumbnail.jpeg')
pain_glory_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/pain_glory_background.jpeg')
pain_glory.background.attach(io: pain_glory_background, filename: 'pain_glory_background.jpeg')
pain_glory_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/pain_glory_trailer.mp4')
pain_glory.trailer.attach(io: pain_glory_trailer, filename: 'pain_glory_trailer.mp4')

# # Boyhood
boyhood = Video.create!(title: "Boyhood", description: "The life of Mason, from early childhood to his arrival at college.", year: 2014, runtime: 165, genre_id: 4)

boyhood_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/boyhood_thumbnail.jpeg')
boyhood.thumbnail.attach(io: boyhood_thumbnail, filename: 'boyhood_thumbnail.jpeg')
boyhood_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/boyhood_background.jpeg')
boyhood.background.attach(io: boyhood_background, filename: 'boyhood_background.jpeg')
boyhood_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/boyhood_trailer.mp4')
boyhood.trailer.attach(io: boyhood_trailer, filename: 'boyhood_trailer.mp4')

# # Parasite
parasite = Video.create!(title: "Parasite", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", year: 2019, runtime: 132, genre_id: 4)

parasite_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/parasite_thumbnail.jpeg')
parasite.thumbnail.attach(io: parasite_thumbnail, filename: 'parasite_thumbnail.jpeg')
parasite_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/parasite_background.jpeg')
parasite.background.attach(io: parasite_background, filename: 'parasite_background.jpeg')
parasite_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/parasite_trailer.mp4')
parasite.trailer.attach(io: parasite_trailer, filename: 'parasite_trailer.mp4')

# # Moonlight
moonlight = Video.create!(title: "Moonlight", description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.", year: 2016, runtime: 111, genre_id: 4)

moonlight_thumbnail = URI.open('https://webflix-seeds.s3.amazonaws.com/thumbnails/moonlight_thumbnail.jpeg')
moonlight.thumbnail.attach(io: moonlight_thumbnail, filename: 'moonlight_thumbnail.jpeg')
moonlight_background = URI.open('https://webflix-seeds.s3.amazonaws.com/backgrounds/moonlight_background.jpeg')
moonlight.background.attach(io: moonlight_background, filename: 'moonlight_background.jpeg')
moonlight_trailer = URI.open('https://webflix-seeds.s3.amazonaws.com/trailers/moonlight_trailer.mp4')
moonlight.trailer.attach(io: moonlight_trailer, filename: 'moonlight_trailer.mp4')

# Mylist Seeds

# Tobey Mylists
mylist1 = Mylist.create!(profile_id: profile5.id, video_id: boyhood.id)
mylist2 = Mylist.create!(profile_id: profile5.id, video_id: spiderman2.id)
mylist3 = Mylist.create!(profile_id: profile5.id, video_id: shining.id)

# Andrew Mylists
mylist4 = Mylist.create!(profile_id: profile6.id, video_id: scream.id)
mylist5 = Mylist.create!(profile_id: profile6.id, video_id: napoleon_dynamite.id)

# Tom Mylists
mylist6 = Mylist.create!(profile_id: profile7.id, video_id: hereditary.id)
mylist7 = Mylist.create!(profile_id: profile7.id, video_id: social_network.id)


# Like Seeds

# Scott Pilgrim Likes
# like1 = Like.create!(profile_id: profile1.id, video_id: scott_pilgrim.id)
# like2 = Like.create!(profile_id: profile2.id, video_id: scott_pilgrim.id)
# like3 = Like.create!(profile_id: profile3.id, video_id: scott_pilgrim.id)

# # Spiderman 2 Likes
# like4 = Like.create!(profile_id: profile1.id, video_id: spiderman2.id)
# like5 = Like.create!(profile_id: profile2.id, video_id: spiderman2.id)

# # Parasite Likes
# like6 = Like.create!(profile_id: profile1.id, video_id: parasite.id)

# # Scream Likes
# like7 = Like.create!(profile_id: profile1.id, video_id: scream.id)

# # Boyhood Likes
# like8 = Like.create!(profile_id: profile1.id, video_id: boyhood.id)

# # Napoleon Dynamite Likes
# like9 = Like.create!(profile_id: profile1.id, video_id: napoleon_dynamite.id)