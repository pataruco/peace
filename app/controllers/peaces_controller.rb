class PeacesController < ApplicationController
  def index
  	@peaces = Peace.all
  	# render json: @peaces
  end

  def show
  	@peace = Peace.where(country_code: params[:id])
  	render json: @peace
  end


end
