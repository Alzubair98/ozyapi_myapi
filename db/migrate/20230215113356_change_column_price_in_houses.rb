class ChangeColumnPriceInHouses < ActiveRecord::Migration[7.0]
  def change
    change_column :houses, :price, "numeric USING CAST(price AS numeric)"
    change_column :houses, :price, :float 
    change_column :houses, :real_price, "numeric USING CAST(real_price AS numeric)"
    change_column :houses, :real_price, :float
  end

end
