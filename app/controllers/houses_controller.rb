class HousesController < ApplicationController
    def index 
        houses = House.all.with_attached_image
        render json: houses.map { |house| 
        house.as_json.merge({image: url_for(house.image)})
    }
        #render json: HouseSerializer.new(houses).serializable_hash[:data][:attributes]
        
        # houses = House.all 
        # render json: houses
    end

    def all_images # for many images records
        houses = House.all.as_json(include: :images)
        render json: houses
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
        params.require(:house).permit(:house_type, images: [])
    end

end