class Dish < ApplicationRecord
  belongs_to :user
  has_many :recipes
end