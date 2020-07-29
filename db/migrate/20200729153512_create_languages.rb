class CreateLanguages < ActiveRecord::Migration[6.0]
  def change
    create_table :languages do |t|
      t.string :title, unique: true

      t.timestamps
    end
  end
end
