class Nextevaluationnote < ApplicationRecord
  belongs_to :client
  validates :nnote, presence: true
  validates :nnote_date, presence: true
end
