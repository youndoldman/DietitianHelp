class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :clients
  has_many :progressnotes, through: :clients
  has_many :nextevaluationnotes, through: :clients
  has_many :monitoringnotes, through: :clients
  has_many :fullassessments, through: :clients
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, 
         :validatable, :authentication_keys => [:username]

    def email_required?
       false
    end
     
    def email_changed?
       false
    end

  def all_clients_records
    self.clients.map { |client| client.medical_record }.first
  end

  def history
    @all_docs = {
      fullassessments: self.fullassessments,
      progressnotes: self.progressnotes,
      monitoringnotes: self.monitoringnotes,
      labs: self.labs,
      goals: self.goals,
      nextevaluationnotes: self.nextevaluationnotes
    }
  end

end

  # Virtual attribute for authenticating by either username or email
  # This is in addition to a real persisted field like 'username'
