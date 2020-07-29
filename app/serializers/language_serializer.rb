class LanguageSerializer
  include FastJsonapi::ObjectSerializer

  set_id :id
  attributes :title
end