class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.belongs_to :client, foreign_key: true
      t.string :goals

      t.timestamps
    end
  end
end
