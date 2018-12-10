class AddUserToFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :user1_id, :integer, foreign_key: true
    add_column :friends, :user2_id, :integer, foreign_key: true
  end
end
