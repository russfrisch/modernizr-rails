module Modernizr
  module Rails
    class Engine < ::Rails::Engine
      initializer 'Modernizr precompile hook', :group => :all do |app|
        app.config.assets.precompile += ['modernizr.js']
      end
    end
  end
end
