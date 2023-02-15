class ChangeColumnPriceInHouses < ActiveRecord::Migration[7.0]
  def change
    change_column :houses, :price, :integer
    change_column :houses, :real_price, :integer
  end
end
