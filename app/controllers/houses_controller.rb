class HousesController < ApplicationController
    def index 
        houses = House.last
        render json: HouseSerializer.new(houses).serializable_hash[:data][:attributes]
    end

    def new 
    end

    def create 
        house = House.create!(house_params)
        render json: {
            status: :created,
            house: house
        }
    end


    private 

    def house_params
        params.require(:house).permit(:house_type, :image)
    end

end