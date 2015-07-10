class PeacesController < ApplicationController
  def index
  	@peaces = Peace.all
  end

  def show
  	@peace = Peace.where(country_code: params[:id])
  	render json: @peace
  end


end
