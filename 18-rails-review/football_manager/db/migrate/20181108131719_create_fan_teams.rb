class CreateFanTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :fan_teams do |t|
      t.references :fan, foreign_key: true
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
