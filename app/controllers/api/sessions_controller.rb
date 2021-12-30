class SessionsController < ApplicationController
   
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Please try logging in again.'], status: 401
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No current user.'], status: 404
    end
  end
  
end
