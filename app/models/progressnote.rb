class Progressnote < ApplicationRecord
  belongs_to :client
  validates :pnote, presence: true
end
