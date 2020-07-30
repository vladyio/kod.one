set :output, File.join(Whenever.path, 'log', 'cron.log')

every 1.week do
  rake 'snippets_cleanup'
end
