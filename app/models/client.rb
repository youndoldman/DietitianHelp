class Client < ApplicationRecord
	belongs_to :user
	has_many :fullassessments
	has_many :progressnotes
	has_many :monitoringnotes
	has_many :labs
	has_many :goals
	has_many :nextevaluationnotes

	def medical_record
		@all_docs = {
			client: self,
			fullassessments: self.fullassessments,
			progressnotes: self.progressnotes,
			monitoringnotes: self.monitoringnotes,
			labs: self.labs,
			goals: self.goals,
			nextevaluationnotes: self.nextevaluationnotes
		}
	end

	def name
		self.firstname + " " + self.lastname
	end
	
end
