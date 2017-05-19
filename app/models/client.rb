class Client < ApplicationRecord
	belongs_to :user
	has_many :full_assessments
	has_many :progressnotes
	has_many :monitoringnotes
	has_many :nextevaluationnotes
	has_many :goals
end
