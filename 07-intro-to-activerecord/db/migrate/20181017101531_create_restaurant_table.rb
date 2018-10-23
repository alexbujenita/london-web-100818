class CreateRestaurantTable < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :kind
      t.integer :avg_meal_price
    end
  end
end
