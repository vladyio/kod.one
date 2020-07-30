desc 'Clean empty snippets older than a week'
task snippets_cleanup: :environment do
  matching_snippets = Snippet.where('updated_at < ?', 1.week.ago)
                             .where(code: [nil, ''])

  puts "Found #{matching_snippets.count} matching snippets"
  puts 'Destroying...'

  matching_snippets.destroy_all

  puts 'Done!'
end
