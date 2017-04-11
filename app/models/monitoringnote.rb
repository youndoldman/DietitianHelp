class Monitoringnote < ApplicationRecord
  belongs_to :client
  before_save do |x| 
  	if x.mnote === "" 
  		raise ActiveRecord::Rollback
  	else puts "Monitoring Note Note Saved"
  	end
  end
end
