class Note < ApplicationRecord
  belongs_to :user

  validates :title, presence: :true
  validates :content, length: { minimum: 50 }
  validates :category, presence: :true
end
