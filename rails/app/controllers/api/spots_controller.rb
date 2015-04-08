class Api::SpotsController < ApplicationController

  def index
    render json: Spot.all
  end

  def show
    render json: Spot.find(params[:id])
  end

  def new
    newSpot = Spot.new()
  end

  def create
    newSpot = Spot.new(spot_params)
    if newSpot.save
      render :json => newSpot, status: :created
    else
      render :json => newSpot.errors, status: :unprocessable_entity
    end
  end

  private
  def spot_params
    params.require(:spot).permit(
    :name, :location, :latitude, :longitude,
    :kind, :price_range, :style, :hours,
    :dates, :phone, :card, :image_url)
  end
end
