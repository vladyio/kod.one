class Snippet < ApplicationRecord
  before_create :generate_and_set_short_id

  private

  def generate_and_set_short_id
    self.sid = Nanoid.generate(size: 5) + Time.current.strftime('%S%L')
  end
end
