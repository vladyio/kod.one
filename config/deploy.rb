lock '~> 3.14.1'

set :application, 'kodone_backend'
set :repo_url, 'git@github.com:vladyio/kod.one.git'

append :linked_files, 'config/master.key'

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

set :deploy_via,      :remote_cache
set :puma_bind,       "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock"
set :puma_state,      "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,        "#{shared_path}/tmp/pids/puma.pid"
set :puma_access_log, "#{release_path}/log/puma.error.log"
set :puma_error_log,  "#{release_path}/log/puma.access.log"
set :puma_preload_app, true
set :puma_worker_timeout, nil

set :rvm_ruby_version, '2.7.1@kod1'

set :user, 'deployer'
set :ssh_options, forward_agent: true
