Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:3000"
  
      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true #allow us to pass the cookie and headers form the front-end to back end
    end

    # allow do
    #     origins "https://helpful-douhua-bfc6b0.netlify.app"
    
    #     resource "*",
    #       headers: :any,
    #       methods: [:get, :post, :put, :patch, :delete, :options, :head],
    #       credentials: true
    #   end
end