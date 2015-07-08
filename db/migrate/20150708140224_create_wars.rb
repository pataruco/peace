class CreateWars < ActiveRecord::Migration
  def change
    create_table :wars do |t|
      t.string :country_name
      t.string :country_code
      t.integer :homicide
      t.integer :prison
      t.integer :crime
      t.integer :terrorism
      t.integer :military_gdp

      t.timestamps null: false
    end
  end
end
