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
require "test_helper"

class GenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
