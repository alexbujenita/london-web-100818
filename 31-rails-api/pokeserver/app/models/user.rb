class User < ApplicationRecord
  has_many :pokemons
  has_many :friends
  has_many :users, through: :friends
end
