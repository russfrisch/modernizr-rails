# modernizr-rails

The modernizr-rails gem will include the [Modernizr.js](https://github.com/Modernizr/Modernizr) library into your Rails 3.1 or higher app via the asset pipeline. This modernizr.js file was built using the builder located at http://www.modernizr.com/download/ with all options checked.

## How to Use
Add the following to your GemFile:<br> 
`gem 'modernizr-rails'`<br>

Modernizr should be added to the `<head>` of your HTML so that feature detection happens before anything else.
You can use the rails helper `=javascript_include_tag 'modernizr'` or `=javascript_include_tag 'modernizr.min'`
for the minified version.

Note: The rails 3+ asset pipeline should minify the javascript in production automatically so it should
not be completely necessary to use the `modernizr.min` version.

Don't forget to run `bundle update` after upgrading to the latest gem version to ensure it's used by your rails app.

## HTML5 Boilerplate Rails Application Template
If you're also a fan of the HTML5 Boilerplate project (http://h5bp.com), please check out a Rails 3.1 compatible application template I created that incorporates this Modernizr-Rails gem: https://github.com/russfrisch/h5bp-rails

## Push Requests
This is my first Ruby Gem so if there is anything that can be done better or you would like to see tweaked, please send me a push request.

## Copyright
(The MIT license)

Copyright (C) 2011-2013 Russell Frisch (russfrisch)

See [LICENSE.md](LICENSE.md).
