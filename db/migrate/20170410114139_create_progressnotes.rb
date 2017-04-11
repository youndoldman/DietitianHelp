class CreateProgressnotes < ActiveRecord::Migration[5.0]
  def change
    create_table :progressnotes do |t|
      t.text :pnote
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
