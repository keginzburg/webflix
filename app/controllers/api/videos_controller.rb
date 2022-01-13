class Api::VideosController < ApplicationController
  def index
    if params[:search] != ""
      @videos = Video.where('title LIKE ?',"%#{params[:search]}")
      debugger
      render :index
    else
      @videos = Video.all
      debugger
      render :index
    end
  end

  def show
    @video = Video.find_by(id: params[:id])
    render :show
  end

  def videos_params
    params.require(:video).permit(:title, :description, :year, :runtime, :genre_id)
  end
end
