class Api::V1::GreetingsController < ApplicationController
  def greetings
    greet = Greeting.order('RANDOM()').first
    render json: { greeting: greet.message }
  end
end
