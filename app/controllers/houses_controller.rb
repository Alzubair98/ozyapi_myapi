class HousesController < ApplicationController
    def index 
        houses = House.all
        render json: {
            status: :all_houses,
            houses: houses
        }
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