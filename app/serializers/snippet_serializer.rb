class SnippetSerializer
  include FastJsonapi::ObjectSerializer

  set_id :sid

  attributes :code, :created_at, :updated_at
end