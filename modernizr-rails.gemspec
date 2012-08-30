# -*- encoding: utf-8 -*-
require File.expand_path('../lib/modernizr/rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = "modernizr-rails"
  s.version     = Modernizr::Rails::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Russ Frisch"]
  s.email       = ["russfrisch@shortmail.com"]
  s.homepage    = "http://rubygems.org/gems/modernizr-rails"
  s.summary     = %q{Gem wrapper to include the Modernizr.js library via the asset pipeline.}
  s.description = %q{This Modernizr.js was built using the at http://www.modernizr.com/download/ with all options enabled.}

  s.rubyforge_project = "modernizr-rails"
  
  s.add_development_dependency "rails", ">= 3.1.0"
  
  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
end
