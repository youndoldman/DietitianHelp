Rails.application.configure do
config.serve_static_assets = true
config.assets.initialize_on_precompile = false

config.assets.paths << Rails.root.join("app", "assets", "stylesheets")
config.assets.paths << Rails.root.join("app", "assets", "javascripts")
config.assets.paths << Rails.root.join("vendor", "assets", "stylesheets")
config.assets.paths << Rails.root.join("vendor", "assets", "javascripts")

require 'rails/all'
end


rails g scaffold Client firstname:string lastname:string allergies:string cdiet:string dx:string ht:integer cbw:integer date0:string thirtywt:integer ninetywt:integer oneeightywt:integer date1:string date2:string date3:strin intakefrom:integer intaketo:integer bmi:decimal ibw:integer calreq:integer proreq:integer flreq:integer fassess:string fpes:string pes0:string pes1:string pes2:string