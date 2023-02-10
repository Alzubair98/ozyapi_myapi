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
        render json: House.last.as_json(include: :images).merge(
            images: House.last.images.map do |image| 
                url_for(image)
            end
        )
        
    end

    def new 
    end

    def create 
        house = House.create!(house_params.except(:images))
        images = params[:house][:images]
        
        if images  # to check the images
            images.each do |image|
                house.images.attach(image)
            end
        end

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