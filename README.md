# modernizr-rails

The modernizr-rails gem will include the [Modernizr.js](https://github.com/Modernizr/Modernizr) library into your `Rails 3.1+` app via the asset pipeline. This modernizr.js file was built using the builder located at http://www.modernizr.com/download/ with all options checked.

## Installation
Add the following to your `assets` group in your Gemfile:

```ruby
group :assets do
  gem 'modernizr-rails'
end
```

## Usage
Modernizr should be added to the `<head>` of your HTML. Be sure to check out the [offical docs](http://modernizr.com/docs/#installing) about **Installing Modernizr** for more info.
Include it using the helper like so `<%= javascript_include_tag :modernizr %>`, Rails will take care of the compilation and minification automatically for you.


Example of your `app/views/layouts/application.html.erb`:

```erb
<html>
<head>
  <title>Your App</title>
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
