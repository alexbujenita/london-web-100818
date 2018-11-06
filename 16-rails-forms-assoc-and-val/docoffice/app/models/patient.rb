class Patient < ApplicationRecord
  has_many :visits
  has_many :doctors, through: :visits
end
