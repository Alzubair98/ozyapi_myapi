class HousesController < ApplicationController
    def index 
        
    
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
        house = House.new(house_params.except(:images))
        images = params[:house][:images]
        
        if images  # to check the images
            images.each do |image|
                house.images.attach(image)
            end
        end
        if house.save 
            render json: {
                status: :created,
                house: house
            }
        else 
            render json: {
                status: :not_created,
                house: house.errors
            }
        end
    end


    private 

    def house_params
        params.require(:house).permit(:house_type, images: [])
    end

end