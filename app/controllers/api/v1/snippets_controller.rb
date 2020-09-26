class API::V1::SnippetsController < ApplicationController
  before_action :set_snippet, only: %i[show destroy update]

  def index
    @snippets = Snippet.all

    render json: SnippetSerializer.new(@snippets), status: 200
  end

  def create
    @snippet = Snippet.create(snippet_params)

    render json: SnippetSerializer.new(@snippet), status: 200
  end

  def show
    render json: SnippetSerializer.new(@snippet), status: 200
  end

  def update
    @snippet.update(snippet_params)

    render json: SnippetSerializer.new(@snippet), status: 200
  end

  def destroy
    @snippet.destroy

    render json: { status: 200 }
  end

  private

  def set_snippet
    @snippet = Snippet.find_by(sid: params[:sid])
  end

  def snippet_params
    params.require(:snippet).permit(:code, :language_id)
  end
end
