# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.destroy_all
User.destroy_all
puts "seeds destroyed"

User.create(username: "seededuser1", email: "seed@seed.com", password: "1234", bio: "i'm the seeded user", image_url: "https://www.publicdomainpictures.net/pictures/100000/velka/toothed-potato-face.jpg")
Note.create(title: "note1 from seed", content: "this is the text of note 1 humor", category: "humor", user_id: 1)
Note.create(title: "note2 from seed", content: "this is the text of note 2 sad", category: "sad", user_id: 1)
Note.create(title: "note3 from seed", content: "this is the text of note 3 happy", category: "happy", user_id: 1) 
Note.create(title: "note4 from seed", content: "this is the text of note 4 humor", category: "humor", user_id: 1)
puts "done seeding"