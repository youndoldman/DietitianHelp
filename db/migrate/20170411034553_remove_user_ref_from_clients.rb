class RemoveUserRefFromClients < ActiveRecord::Migration[5.0]
  def change
    remove_reference :clients, :user_id, foreign_key: true
  end
end
