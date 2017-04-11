class Document < ApplicationRecord
  belongs_to :client
  belongs_to :fullassessment_id
  belongs_to :progressnote_id
  belongs_to :monitoringnote_id
end
