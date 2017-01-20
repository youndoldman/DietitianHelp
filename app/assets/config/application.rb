Rails.application.configure do
config.serve_static_assets = true
config.assets.initialize_on_precompile = false

config.assets.paths << Rails.root.join("app", "assets", "stylesheets")
config.assets.paths << Rails.root.join("app", "assets", "javascripts")
config.assets.paths << Rails.root.join("vendor", "assets", "stylesheets")
config.assets.paths << Rails.root.join("vendor", "assets", "javascripts")

require 'rails/all'
end