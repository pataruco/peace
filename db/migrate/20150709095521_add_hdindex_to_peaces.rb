class AddHdindexToPeaces < ActiveRecord::Migration
  def change
    add_column :peaces, :hdi_index, :float
  end
end
