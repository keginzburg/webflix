# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  runtime     :integer          not null
#  title       :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  genre_id    :integer          not null
#
# Indexes
#
#  index_videos_on_genre_id  (genre_id)
#
require "test_helper"

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
