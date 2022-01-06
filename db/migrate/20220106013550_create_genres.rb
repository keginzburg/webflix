class CreateGenres < ActiveRecord::Migration[6.1]
  def change
    create_table :genres do |t|
      t.string :genre, null: false
      t.timestamps
    end
    add_index :genres, :genre
  end
end
