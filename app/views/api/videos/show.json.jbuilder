json.extract! @video, :id, :title, :description, :year, :runtime, :genre
json.trailerUrl video.trailer.attached? ? url_for(video.trailer) : ""