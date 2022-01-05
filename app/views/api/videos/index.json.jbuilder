@videos.each do |video|

  json.set! video.id do

    json.extract! video, :id, :title, :description, :year, :runtime, :genre_id

  end

end