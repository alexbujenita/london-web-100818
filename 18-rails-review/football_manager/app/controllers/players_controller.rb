class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :edit, :update, :destroy]

  def index
    @players = Player.all
  end

  def show

  end

  def new
    @player = Player.new
    @teams  = Team.all
  end

  def create
    @player = Player.create(player_params)
    redirect_to @player
  end

  def edit
    @teams = Team.all
  end

  def update
    @player.update(player_params)
    redirect_to @player
  end

  def destroy
    @player.destroy
    redirect_to players_path
  end


  private

  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:name, :position, :number, :team_id)
  end

end
