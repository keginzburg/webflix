@profiles.each do |profile|
    json.extract! profile, :id, :name, :avatar, :user_id
end