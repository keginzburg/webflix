class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profiles.all
    render :index
  end

  def 
end
