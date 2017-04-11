class CreateDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :documents do |t|
      t.belongs_to :client, foreign_key: true
      t.references :fullassessment_id, foreign_key: true
      t.references :progressnote_id, foreign_key: true
      t.references :monitoringnote_id, foreign_key: true

      t.timestamps
    end
  end
end
