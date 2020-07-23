class API::V1::SnippetsController < ApplicationController
  before_action :set_snippet, only: %i[show destroy update]

  def index
    @snippets = Snippet.all

    render json: @snippets, status: 200
  end

  def show
    render json: @snippet
  end

  def update
    @snippet.update(snippet_params)

    render json: @snippet, status: 200
  end

  def destroy
    @snippet.destroy

    render json: { status: 200 }
  end

  private

  def set_snippet
    @snippet = Snippet.find(params[:id])
  end

  def snippet_params
    params.require(:snippet).permit(:code)
  end
end