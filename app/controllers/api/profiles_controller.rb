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

  def update
    @profile = Profile.find_by(id: params[:id])
    if @profile && @profile.update(profile_params)
      render :update
    else
      render json: @profile.errors.full_messages
    end
  end

  def destroy
    @profile = Profile.find_by(id: params[:id])
    if @profile && @profile.destroy()
      render :destroy
    else
      render json: @profile.errors.full_messages
    end
  end

  def profile_params
     params.require(:profile).permit(:name, :avatar, :user_id)
  end
end
