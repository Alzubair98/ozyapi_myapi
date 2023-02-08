class HousesController < ApplicationController
    def index 
        houses = House.all
        render json: {
            status: :all_houses,
            houses: houses
        }
    end

end