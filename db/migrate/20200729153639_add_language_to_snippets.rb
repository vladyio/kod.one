class AddLanguageToSnippets < ActiveRecord::Migration[6.0]
  def change
    add_reference :snippets, :language, foreign_key: true
  end
end
