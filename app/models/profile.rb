# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  avatar     :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_profiles_on_user_id_and_name  (user_id,name) UNIQUE
#
class Profile < ApplicationRecord

  validates :user_id, presence: true
  validates :name, :avatar, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :mylists,
    primary_key: :id,
    foreign_key: :profile_id,
    class_name: :Mylist,
    dependent: :destroy

  has_many :mylist_videos,
    through: :mylists,
    source: :video

  has_many :likes,
    primary_key: :id,
    foreign_key: :profile_id,
    class_name: :Like,
    dependent: :destroy

  has_many :liked_videos,
    through: :likes,
    source: :liked_video

end
