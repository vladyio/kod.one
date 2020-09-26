class SnippetForkService < ApplicationService
  def initialize(sid:)
    @sid = sid
  end

  def call
    snippet = Snippet.find_by_sid(@sid)
    Snippet.create(code: snippet.code, language: snippet.language)
  end
end
