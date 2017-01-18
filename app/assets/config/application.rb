config.assets.paths << Rails.root.join("app", "assets", "stylesheets")
config.assets.paths << Rails.root.join("app", "assets", "javascripts")
config.assets.paths << Rails.root.join("vendor", "assets", "stylesheets")
config.assets.paths << Rails.root.join("vendor", "assets", "javascripts", "fonts")
config.serve_static_assets = true
config.assets.initialize_on_precompile = false

require 'rails/all'