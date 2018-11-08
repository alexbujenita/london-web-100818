class Team < ApplicationRecord
  has_many :players
  has_one :manager
  has_many :fan_teams
  has_many :fans, through: :fan_teams
end
