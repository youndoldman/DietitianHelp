class Nextevaluationnote < ApplicationRecord
  belongs_to :client
  belongs_to :user
  before_save do |x| 
  	if x.nnote === "" 
  		raise ActiveRecord::Rollback
  	else puts "Next Evaluation Note Saved"
  	end
  end
end
