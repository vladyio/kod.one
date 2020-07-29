class Language < ApplicationRecord
  has_many :snippets, dependent: :nullify
end
