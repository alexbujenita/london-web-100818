class Doctor < ApplicationRecord
  belongs_to :office
  has_many :visits
  has_many :patients, through: :visits

  validates :name, uniqueness: true, presence: true, length: { minimum: 2 }
  validates :specialty, presence: true, length: { minimum: 2 }
end
