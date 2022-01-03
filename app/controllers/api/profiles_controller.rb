class Api::ProfilesController < ApplicationController
  def index
    debugger
    @profiles = Profile.all
    debugger
    render :index
  end

  def profile_params
     params.require(:profile).permit(:name, :string, :user_id)
  end
end
