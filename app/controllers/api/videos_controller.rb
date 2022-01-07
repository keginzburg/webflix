class Api::VideosController < ApplicationController
  def index
    @videos = Video.with_attached_thumbnail.all
    render :index
  end

  def show
    @video = Video.find_by(id: params[:id])
    render :show
  end

  def videos_params
    params.require(:video).permit(:title, :description, :year, :runtime, :genre_id, :video_file)
  end
end
