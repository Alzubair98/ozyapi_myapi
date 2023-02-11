class User < ApplicationRecord
    before_save { self.email = email.downcase }
    validates :email, presence: true,
                         length: { minimum: 3, maximum: 90 },
                         uniqueness: { case_sensitive: false }
                         has_secure_password
    validates :number, presence: true
end