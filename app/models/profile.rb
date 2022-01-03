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

  validates :user_id, presence: true, uniqueness: true
  validates :name, :avatar, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
