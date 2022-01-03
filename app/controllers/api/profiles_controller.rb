class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile.all
    render :index
  end

  def profile_params
     params.require(:profile).permit(:name, :string, :user_id)
  end
end
