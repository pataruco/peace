class ChangeTypeOfColumnsOnWarTable < ActiveRecord::Migration
  def change
  	change_column :wars, :homicide, :float
  	change_column :wars, :prison, :float
  	change_column :wars, :crime, :float
  	change_column :wars, :terrorism, :float
  	change_column :wars, :military_gdp, :float
  end
end
