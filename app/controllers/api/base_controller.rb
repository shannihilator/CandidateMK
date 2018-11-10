class Api::BaseController < ApplicationController
  include HTTParty

  def index


    headers = {
      "Authorization" => "Bearer #{Figaro.env.api_key}",
      'Content-Type' =>'application/json',
      'Accept'=>'application/json'
    }

    url = "https://api.salesloft.com/v2/people.json"
    @people = HTTParty.get(url, :headers => headers)
    render json: @people

  end

end