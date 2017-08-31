class AddMoreColumnsToFullassessments < ActiveRecord::Migration[5.0]
  def change
    add_column :fullassessments, :diagnosis, :string
    add_column :fullassessments, :intervention, :string
    add_column :fullassessments, :monitoring_evaluation, :string
    add_column :fullassessments, :type, :string
    add_column :fullassessments, :date, :string
  end
end
