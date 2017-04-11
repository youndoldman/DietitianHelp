class RenameRefsInDoc < ActiveRecord::Migration[5.0]
  def change
  	rename_column :documents, :fullassessment_id_id, :fullassessment_id
  	rename_column :documents, :progressnote_id_id, :progressnote_id
  	rename_column :documents, :monitoringnote_id_id, :monitoringnote_id
  end
end
