class AddRevisiondateToGoals < ActiveRecord::Migration[5.0]
  def change
    add_column :goals, :revision_date, :date
  end
end
