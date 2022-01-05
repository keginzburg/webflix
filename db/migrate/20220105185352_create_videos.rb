class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :year, null: false
      t.integer :runtime, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end
    add_index :videos, :genre_id
  end
end
