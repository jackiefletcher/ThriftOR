class ChangeSpotsCardsColumnName < ActiveRecord::Migration
  def change
    change_table :spots do |t|
      t.rename :card?, :card
    end
  end
end
