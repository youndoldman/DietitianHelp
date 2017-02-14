class AddProviderToClients < ActiveRecord::Migration[5.0]
  def change
    add_column :clients, :provider, :string
  end
end
