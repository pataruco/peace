class PeacesController < ApplicationController
  def index
  	@peaces = Peace.all
  end
end
