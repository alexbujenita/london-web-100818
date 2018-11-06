class Doctor < ApplicationRecord
  belongs_to :office
  has_many :visits
  has_many :patients, through: :visits
end
