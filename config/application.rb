require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"
require 'sprockets/es6'
Bundler.require(*Rails.groups)

module DietitianHelp
  class Application < Rails::Application
  	config.action_view.embed_authenticity_token_in_remote_forms = true
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
