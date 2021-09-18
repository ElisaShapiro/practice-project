class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category
  has_one :user
end
