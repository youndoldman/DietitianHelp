class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :clients
  has_many :nextevaluationnotes
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, 
         :validatable, :authentication_keys => [:username]
def email_required?
   false
end
 
def email_changed?
   false
end

end

  # Virtual attribute for authenticating by either username or email
  # This is in addition to a real persisted field like 'username'
