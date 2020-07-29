class AddSidToSnippets < ActiveRecord::Migration[6.0]
  def change
    add_column :snippets, :sid, :string
    add_index :snippets, :sid, unique: true
  end
end
