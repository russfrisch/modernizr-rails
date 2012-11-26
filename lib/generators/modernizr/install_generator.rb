module Modernizr
  class InstallGenerator < ::Rails::Generators::Base

    def noify_about_javascripts
      insert_into_file File.join('app', 'assets', 'javascripts', 'application.js'),
      :before => "//= require_tree ." do
        %Q{//= require modernizr \n}
      end

      puts "*" * 75
      puts "We added the following line to your application.js file,"
      puts " "
      puts "  //= require modernizr"
      puts " "
      puts "*" * 75
    end

  end
end
