class Nextevaluationnote < ApplicationRecord
  belongs_to :client
  belongs_to :user
  validates :nnote, presence: true
  validates :nnote_date, presence: true
end
