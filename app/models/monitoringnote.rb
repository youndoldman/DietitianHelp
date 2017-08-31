class Monitoringnote < ApplicationRecord
  belongs_to :client
  validates :mnote, presence: true
end
