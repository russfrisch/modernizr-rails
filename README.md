# modernizr-rails

The modernizr-rails gem will include the [Modernizr.js](https://github.com/Modernizr/Modernizr) library into your `Rails 3.1+` app via the asset pipeline. This gem is bundled with the development version from the [Modernizr site](http://modernizr.com), which is minified by the Rails Assets Pipeline for you automatically. If you need custom feature detection tests, consider the [Custom feature detection tests](#custom-feature-detection-tests) section in this README.

## Installation
Add the following to your `assets` group in your Gemfile:

```ruby
group :assets do
  gem 'modernizr-rails'
end
```

## Usage
Modernizr should be added to the `<head>` of your HTML. Be sure to check out the [offical docs](http://modernizr.com/docs/#installing) about **Installing Modernizr** for more info.

There is two ways to use this gem. If you don't know which feature you'll need to test, add this line to your `app/assets/javascripts/application.js` to compile as a part of application.js

	// Load all Modernizr javascripts
	//= require modernizr

Or include it using the helper like so `<%= javascript_include_tag :modernizr %>`, Rails will take care of the compilation and minification automatically for you.


Example of your `app/views/layouts/application.html.erb`:

```erb
<html>
<head>
  <title>Your Awesome App</title>
  <%= stylesheet_link_tag    :application, media: :all %>
  <%= javascript_include_tag :modernizr %>
  <%= csrf_meta_tags %>
</head>
<body>
  ...
  <%= javascript_include_tag :application %>
</body>
</html>
```
This will load all test scripts, including the `Modernizr.load` conditional script loader, based on [yepnope.js](https://github.com/SlexAxton/yepnope.js).

If you already know which feature you need to test and don't want to load all these javascript files, you can load individual Modernizr javascript :

	// Custom loading example
	//= require modernizr-canvas
	//= require modernizr-fontface
	//= require modernizr-geolocation

This will also load the conditional script loader.

If you need to use the standalone `modernizr.js` file, add this line to your `config.application.rb`

	config.assets.precompile += %W(
		modernizr.js
	)

## Custom feature detection tests
I you need a custom feature detection test not included in the Modernizr build shipped with this gem, please consider using your own version instead of sending a pull request to include your test. You can easily do this by moving your Modernizr build in to one of the assets folder. Rails will automagically use your build instead of the shipped one. However you can still continue to use this gem and its features (like the precompile hook, and so on).

1. Configure your build on [modernizr.com/download](http://modernizr.com/download/).
2. Download it.
3. Rename it from `modernizr.custom.12345.js` to just `modernizr.js`.
4. Move it to your asset pipeline folder, ideally `vendor/assets/javascripts`.
5. Enjoy your custom build! :)

## Update

To update the Modernizr scripts, just use this `Rake` command

	rake update-modernizr

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Copyright
(The MIT license)

Copyright (C) 2011-2013 Russell Frisch (russfrisch)

See [LICENSE.md](LICENSE.md).
