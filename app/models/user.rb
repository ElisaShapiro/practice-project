class User < ApplicationRecord
    has_many :users
    
    has_secure_password(validations: false)

    validates :username, presence: true, uniqueness: :true
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
end
