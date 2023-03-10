class RegistrationsController < ApplicationController
    def create
      user = User.create!(
        email: params[:user][:email],
        number: params[:user][:number],
        password: params[:user][:password],
        password_confirmation: params[:user][:password_confirmation],
        admin: params[:user][:admin]) #admin can be deleted

      if user
        # session[:user_id] = user.id
        render json: {
          status: :created,
          user: user
        }
      else
        render json: { status: 500 }
      end
    end
end
  