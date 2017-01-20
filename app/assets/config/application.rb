config.assets.paths << Rails.root.join("app", "assets", "stylesheets")
config.assets.paths << Rails.root.join("app", "assets", "javascripts")
config.assets.paths << Rails.root.join("vendor", "assets", "stylesheets")
config.assets.paths << Rails.root.join("vendor", "assets", "javascripts")

require 'rails/all'