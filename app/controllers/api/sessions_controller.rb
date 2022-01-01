class Api::SessionsController < ApplicationController
   
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      debugger
      render json: ['Please try logging in again.'], status: 401
    else
      debugger
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
