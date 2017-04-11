class AddDateToNextevaluationnote < ActiveRecord::Migration[5.0]
  def change
    add_column :nextevaluationnotes, :nnote_date, :date
  end
end
