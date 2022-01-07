@videos.each do |video|

  json.set! video.id do

    json.extract! video, :id, :title, :description, :year, :runtime, :genre
    json.thumbnailUrl video.thumbnail.attached? ? url_for(video.thumbnail) : ""

  end

end