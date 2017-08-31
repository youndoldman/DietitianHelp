class CreateNextevaluationnotes < ActiveRecord::Migration[5.0]
  def change
    create_table :nextevaluationnotes do |t|
      t.text :nnote
      t.date :nnote_date
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
