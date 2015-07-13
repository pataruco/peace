class PeacesController < ApplicationController
	respond_to :html, :json

  def index
  	@peaces = Peace.all
  	respond_with @peaces
  end

  def show
  	@peace = Peace.where(country_code: params[:id])
  	render json: @peace
  end


end
