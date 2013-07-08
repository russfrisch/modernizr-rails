require 'thor'

class SourceFile < Thor
  include Thor::Actions

  desc 'fetch source files', 'Fetch latest version from GitHub'
  def fetch
    self.destination_root = 'vendor/assets'
    remote = 'http://modernizr.com/downloads/'
    get "#{remote}/modernizr-latest.js", 'javascripts/latest.js'
    inside destination_root do
      version = File.read('javascripts/latest.js').match(/version\s=\s'([\d|\.]+)'/)[1]
      gsub_file '../../lib/modernizr/rails/version.rb', /MODERNIZR_VERSION\s=\s'(\d|\.)+'$/ do |match|
        %Q{MODERNIZR_VERSION = '#{version}'}
      end
    end
  end

  desc 'update javascripts', 'Update javascripts from Modernizr development build'
  def update
    File.open("vendor/assets/javascripts/latest.js") do |f|
      index = 0
      lines = f.readlines
      lines.each_with_index do |line, lineno|
        if line =~ /tests\['.*'\]/
          filename = line.match(/'\w*'/)[0].to_s.tr("'", "")
          filename = "vendor/assets/javascripts/modernizr-" + filename + ".js"
          File.open(filename, File::WRONLY|File::TRUNC|File::CREAT) do |file|
            while !(lines[lineno+index] =~ / };/)
              file.write(lines[lineno+index])
              index += 1
            end
            file.write(lines[lineno+index])
          end
          index = 0
        end
      end
    end
  end
end