class AddPriceToHouse < ActiveRecord::Migration[7.0]
  def change
    add_column :houses, :real_price, :string
    add_column :houses, :price, :string
    add_column :houses, :location, :string
    add_column :houses, :owner_number, :string
    add_column :houses, :age, :string
    add_column :houses, :size, :string
    add_column :houses, :rooms, :string
    add_column :houses, :bath_rooms, :string
    add_column :houses, :ref_number, :string
  end
end
