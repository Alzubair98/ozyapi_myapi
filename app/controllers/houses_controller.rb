class Houses < ApplicationController
    def index 
        houses = Houses.all
        render json :{
            status: :all_houses
            houses: houses
        }

end