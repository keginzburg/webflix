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
class Video < ApplicationRecord

  validates :title, :description, :year, :runtime, :genre_id, presence: true
  
  belongs_to :genre,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Genre

  # has_many :likers,
  #   through: :likes,
  #   source: :User

  # association attaches video to video database entry
  has_one_attached :video_file

end
