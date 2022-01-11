class LikesController < ApplicationController

  def index
    @likes = []
    current_user.profiles.each do |profile|
      @likes += profile.likes
    end

    render :index
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :create
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    if @like && @like.destroy()
      render :destroy
    else
      render json: @like.errors.full_messages
    end
  end

  def like_params
    params.require(:like).permit(:profile_id, :video_id)
  end
end
