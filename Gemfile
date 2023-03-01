source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.1'

gem 'bootsnap', '~> 1.13', require: false
gem 'fast_jsonapi'
gem 'nanoid'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 6.1'
gem 'rack-cors'
gem 'rails', '~> 7.0'
gem 'whenever', require: false

group :development, :test do
  gem 'better_errors'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'pry'
  gem 'pry-rails'
end

group :development do
  gem 'listen', '~> 3.2'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'solargraph'
  gem 'spring', '~> 3'
end
