# modernizr-rails

The modernizr-rails gem will include the [Modernizr.js](https://github.com/Modernizr/Modernizr) library into your Rails 3.1 or higher app via the asset pipeline. This modernizr.js file was built using the builder located at http://www.modernizr.com/download/ with all options checked.

## Installation
Add the following to your Gemfile:

```ruby
gem 'modernizr-rails'
```

## Usage
Modernizr should be added to the `<head>` of your HTML so that feature detection happens before anything else.
You can use the rails helper `<%= javascript_include_tag 'modernizr' %>` (or `<%= javascript_include_tag 'modernizr.min'%>`
for the minified version) to include it.

Example of your `app/views/layouts/application.html.erb`:

```erb
<head>
  <title>Your App</title>
  <%= stylesheet_link_tag    'application', media: 'all' %>
  <%= javascript_include_tag 'modernizr' %>
  <%= csrf_meta_tags %>
</head>
```

Note: The Rails 3+ asset pipeline should minify the javascript in production automatically so it should
not be completely necessary to use the `modernizr.min` version. But be sure to add the following code into `config/application.rb` to make sure it is precompiled.

```ruby
config.assets.precompile += ['modernizr.js']
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
