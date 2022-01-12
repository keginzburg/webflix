class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :profile_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :likes, [:video_id, :profile_id], unique: true
  end
end
