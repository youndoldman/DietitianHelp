class Progressnote < ApplicationRecord
  belongs_to :client
  before_save do |x| 
  	if x.pnote === "" 
  		raise ActiveRecord::Rollback
  	else puts "Progress Note Saved"
  	end
  end
end
