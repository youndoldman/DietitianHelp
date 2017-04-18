class Nextevaluationnote < ApplicationRecord
  belongs_to :client
  belongs_to :user
  before_validation do |x| 
  	if x.nnote == nil || x.nnote_date == nil || x.nnote == "" || x.nnote_date == ""
  		puts "nnote --> " + x.nnote.to_s
  		puts "nnote_date -->> " + x.nnote_date.to_s
  		puts "Next evaluation note NOT saved. Either missing next evaluation note or next evaluation date"
  		raise ActiveRecord::Rollback
  	else 
  		puts "Next Evaluation Note Saved"
  		true
  	end
  end
end
