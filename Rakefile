require 'bundler/gem_tasks'
require File.expand_path('../lib/modernizr/rails/update_scripts', __FILE__)

desc 'Update javascripts with latest version of Modernizr'
task 'update-modernizr' do
	files = SourceFile.new
	files.fetch
	files.update
end
