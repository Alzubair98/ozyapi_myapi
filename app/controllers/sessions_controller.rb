class SessionsController < ApplicationController
    include CurrentUserConcern
    
    def index 
      users = User.all 
      render json: {
        status: :true,
        users: users
      }
    end
    
    def create
        user = User.find_by(email: params[:user][:email])
        .try(:authenticate, params[:user][:password]) # to check the password
  
        if user
            # session[:user_id] = user.id
            render json: {
            stauts: :created,
            logged_in: true,
            user: user
            }
        else
        render json: { stauts: 401 }
        end
    end
end
  