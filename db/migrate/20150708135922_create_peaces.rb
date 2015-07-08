class CreatePeaces < ActiveRecord::Migration
  def change
    create_table :peaces do |t|
      t.string :country_name
      t.string :country_code
      t.integer :edu_index
      t.integer :heal_index
      t.string :hdi_index
      t.integer :edu_exp
      t.integer :heal_exp
      t.integer :gdp
      t.integer :life

      t.timestamps null: false
    end
  end
end
