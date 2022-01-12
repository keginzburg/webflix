@likes.each do |like|

  # if like.profile_id === params[:profile_id].to_i
    json.set! like.id do
      json.extract! like, :id, :profile_id, :video_id
    end
  # end

end