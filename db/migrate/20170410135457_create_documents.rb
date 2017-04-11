class CreateDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :documents do |t|
      t.belongs_to :client, foreign_key: true
      t.references :fullassessment, foreign_key: true
      t.references :progressnote, foreign_key: true
      t.references :monitoringnote, foreign_key: true

      t.timestamps
    end
  end
end
