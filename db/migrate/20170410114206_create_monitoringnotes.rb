class CreateMonitoringnotes < ActiveRecord::Migration[5.0]
  def change
    create_table :monitoringnotes do |t|
      t.text :mnote
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
