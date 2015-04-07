class Api::SpotsController < ApplicationController
  def index
    render json: Spot.all
  end

  def show
    render json: Spot.find(params[:id])
  end
end
