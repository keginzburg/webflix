class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :avatar, null: false
      t.timestamps
    end
    add_index :profiles, [:user_id, :name], unique: true
  end
end
