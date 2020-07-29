class API::V1::LanguagesController < ApplicationController
  def index
    @languages = Language.all

    render json: LanguageSerializer.new(@languages), status: 200
  end
end
