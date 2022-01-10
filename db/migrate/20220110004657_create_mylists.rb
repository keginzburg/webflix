class CreateMylists < ActiveRecord::Migration[6.1]
  def change
    create_table :mylists do |t|
      t.integer :profile_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
    add_index :mylists, [:video_id, :profile_id], unique: true
  end
end
