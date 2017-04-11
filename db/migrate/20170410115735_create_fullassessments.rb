class CreateFullassessments < ActiveRecord::Migration[5.0]
  def change
    create_table :fullassessments do |t|
      t.text :fassess
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
