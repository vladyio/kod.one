Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :snippets, param: :sid
      resources :languages

      post 'snippets/fork', to: 'snippets#fork'
    end
  end
end
