class RenameTypeOnFullassessment < ActiveRecord::Migration[5.0]
  def change
  	rename_column :fullassessments, :type, :assessment_type
  end
end
