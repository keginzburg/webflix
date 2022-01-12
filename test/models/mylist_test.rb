# == Schema Information
#
# Table name: mylists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  profile_id :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_mylists_on_video_id_and_profile_id  (video_id,profile_id) UNIQUE
#
require "test_helper"

class MylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
