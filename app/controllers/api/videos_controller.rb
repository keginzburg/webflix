class Api::VideosController < ApplicationController
  def index
    debugger
    @videos = Video.all
    
    render :index
  end

  def show
    @video = Video.find_by(id: params[:id])
    render :show
  end

  def videos_params
    params.require(:video).permit(:title, :description, :year, :runtime, :genre_id)
  end
end
