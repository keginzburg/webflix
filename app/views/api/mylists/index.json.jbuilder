@mylists.each do |mylist|
  
  if mylist.profile_id === params[:profile_id].to_i
    json.set! mylist.id do
      json.extract! mylist, :id, :profile_id, :video_id
    end
  end
  
end