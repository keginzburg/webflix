class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile.all
    render :index
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render :create
    else
      render json: @profile.errors.full_messages
    end
  end

  def profile_params
     params.require(:profile).permit(:name, :avatar, :user_id)
  end
end
