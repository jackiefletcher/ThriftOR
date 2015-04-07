class Api::SpotsController < ApplicationController
  def index
    render json: Spot.all
  end

  def show
    render json: Speaker.find(params[:id])
  end
end
