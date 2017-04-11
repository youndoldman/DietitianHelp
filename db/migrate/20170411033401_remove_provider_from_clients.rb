class RemoveProviderFromClients < ActiveRecord::Migration[5.0]
  def change
    remove_column :clients, :provider, :string
  end
end
