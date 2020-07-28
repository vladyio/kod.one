server '139.59.146.250', port: 2233, roles: %i[web app db], user: fetch(:user)

set :rails_env, 'production'
set :branch, 'master'
