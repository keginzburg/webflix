# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_genres_on_genre  (genre)
#
class Genre < ApplicationRecord

  validates :genre, presence: true

  has_many :videos,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Video
    
end
