# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  profile_id :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_likes_on_video_id_and_profile_id  (video_id,profile_id) UNIQUE
#
require "test_helper"

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
