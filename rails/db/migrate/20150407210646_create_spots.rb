class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :name
      t.string :location
      t.string :kind
      t.string :price_range
      t.string :style
      t.string :hours
      t.boolean :card?
      t.string :dates
      t.string :phone

      t.timestamps null: false
    end
  end
end
