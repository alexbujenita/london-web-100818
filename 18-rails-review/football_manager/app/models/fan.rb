class Fan < ApplicationRecord
  has_many :fan_teams
  has_many :teams, through: :fan_teams
end
