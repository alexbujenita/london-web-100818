class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render json: @pokemons
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    if @pokemon
      render json: @pokemon
    else
      render json: {error: 'Pokemon not found.'}, status: 404
    end
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon
    else
      render json: {error: 'Unable to create pokemon.'}, status: 400
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit([:name, :image, :user_id])
  end
end
