class DeleteColumnHdiIndexOnPeacesTable < ActiveRecord::Migration
  def change
  	remove_column :peaces, :hdi_index
  end
end
