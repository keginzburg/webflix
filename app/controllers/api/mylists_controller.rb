class Api::MylistsController < ApplicationController

  def index
    @mylists = Mylist.all
    render :index
  end

  def create
    @mylist = Mylist.new(mylist_params)
    if @mylist.save
      render :create
    else
      render json: @mylist.errors.full_messages
    end
  end

  def destroy
    @mylist = Mylist.find_by(id: params[:id])
    if @mylist && @mylist.destroy()
      render :destroy
    else
      render json: @mylist.errors.full_messages
    end
  end

  def mylist_params
    params.require(:mylist).permit(:profile_id, :video_id)
  end
end
