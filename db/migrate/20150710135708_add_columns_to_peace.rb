class AddColumnsToPeace < ActiveRecord::Migration
  def change
  	add_column :peaces, :edu_index_color, :string
  	add_column :peaces, :heal_index_color, :string
  	add_column :peaces, :edu_exp_color, :string
  	add_column :peaces, :heal_exp_color, :string
  	add_column :peaces, :gdp_color, :string
  	add_column :peaces, :life_color, :string
  	add_column :peaces, :hdi_index_color, :string
  end
end

