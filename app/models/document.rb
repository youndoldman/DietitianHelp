class Document < ApplicationRecord
  belongs_to :client
  belongs_to :fullassessment
  belongs_to :progressnote
  belongs_to :monitoringnote
end
