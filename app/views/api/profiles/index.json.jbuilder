@profiles.each do |profile|
    
    if profile.user_id === params[:user_id].to_i
        json.set! profile.id do
            json.extract! profile, :id, :name, :avatar, :user_id
        end
    end
    
end