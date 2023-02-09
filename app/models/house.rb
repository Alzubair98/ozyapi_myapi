class House < ApplicationRecord
    has_many_attached :images

    def image_url 
        Rails.application.routes.url_helpers.url_for(images) if images.attached?
    end
end