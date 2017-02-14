class AddGenderToClients < ActiveRecord::Migration[5.0]
  def change
    add_column :clients, :gender, :string
  end
end
