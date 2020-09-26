class Snippet < ApplicationRecord
  before_create :generate_and_set_short_id, :set_default_language

  belongs_to :language, optional: true

  private

  def set_default_language
    self.language = Language.find_by_title('text')
  end

  def generate_and_set_short_id
    self.sid = Nanoid.generate(size: 5) + Time.current.strftime('%S%L')
  end
end
