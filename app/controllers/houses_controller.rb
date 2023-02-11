class HousesController < ApplicationController
    def index 
        houses = House.all 
        render json: houses.map { |house| {
            id: house.id,
            house_type: house.house_type,

            images_urls: house.images.map { |image| url_for(image)}
        }}
    
        #render json: HouseSerializer.new(houses).serializable_hash[:data][:attributes]
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
        params.require(:house).permit(:house_type, images: [], :price, :real_price, :location, :owner_number, 
                                        :age, :size, :rooms, :bath_rooms, :ref_number)
    end

end