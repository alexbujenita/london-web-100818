class CreateMealsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :name
      t.float :price
    end
  end
end


