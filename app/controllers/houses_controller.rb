class HousesController < ApplicationController
    def index 
        houses = House.all 
        render json: houses.map { |house| {
            id: house.id,
            house_type: house.house_type,
            price: house.price,
            real_price: house.real_price,
            location: house.location,
            owner_number: house.owner_number,
            age: house.age,
            size: house.size,
            rooms: house.rooms,
            bath_rooms: house.bath_rooms,
            ref_number: house.ref_number,
            description: house.description,
            images_urls: house.images.map { |image| url_for(image)}
        }}
    end

    def search_result

        case params[:price]
        when "1000-2000"
            min_price, max_price = 1000,2000
        when "2000-3000"
            min_price, max_price = 2000,3000
        when "3000-4000"
            min_price, max_price = 3000,4000
        when "4000-5000"
            min_price, max_price = 4000,5000
        when "5000-6000"
            min_price, max_price = 5000,6000
        else 
            min_price, max_price = 0, Float::INFINITY
        end


        houses = House.where(house_type: params[:house_type],location: params[:location], rooms: params[:rooms], price: min_price..max_price)
        render json: houses.map { |house| {
            id: house.id,
            house_type: house.house_type,
            price: house.price,
            real_price: house.real_price,
            location: house.location,
            owner_number: house.owner_number,
            age: house.age,
            size: house.size,
            rooms: house.rooms,
            bath_rooms: house.bath_rooms,
            ref_number: house.ref_number,
            description: house.description,
            images_urls: house.images.map { |image| url_for(image)}
        }}
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
        params.require(:house).permit(:house_type,  :price, :real_price, :location, :owner_number, 
                                        :age, :size, :rooms, :bath_rooms, :ref_number, :description,
                                        images: [])
    end

end