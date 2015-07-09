class ChangeNamesOfColumnsOnPeaceTable < ActiveRecord::Migration
  def change
  	
  	change_column :peaces, :edu_index, :float
  	change_column :peaces, :heal_index, :float
  	change_column :peaces, :edu_exp, :float
  	change_column :peaces, :heal_exp, :float
  	change_column :peaces, :gdp, :float
  	change_column :peaces, :life, :float

  end
end




 
 
 
 
 
 