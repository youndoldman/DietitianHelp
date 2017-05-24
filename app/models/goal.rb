class Goal < ApplicationRecord
  belongs_to :client

  # before_update :update do |x|
  # 	@status_before = Goal.where(id: x.id).first.status
  # 	@status_after = x.status
  # 	if @status_before == 'active' && @status_after == 'archive'
  		
  # 	end

  # end
end
