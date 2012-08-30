About
======
The modernizr-rails gem will include the Modernizr.js library (https://github.com/Modernizr/Modernizr) into your Rails 3.1 or higher app via the asset pipeline. This modernizr.js file was built using the builder located at http://www.modernizr.com/download/ with all options checked.

How to Use
===========
Add the following to your GemFile:<br> 
`gem 'modernizr-rails'`<br>

Then add the following to your application.js manifest:<br>
`//= require modernizr`<br>

Or to use the minified version:

`//= require modernizr.min`<br>

Don't forget to run `bundle update` after upgrading to the latest gem version to ensure it's used by your rails app.

HTML5 Boilerplate Rails Application Template
=============================================
If you're also a fan of the HTML5 Boilerplate project (http://h5bp.com), please check out a Rails 3.1 compatible application template I created that incorporates this Modernizr-Rails gem: https://github.com/russfrisch/h5bp-rails

Push Requests
==============
This is my first Ruby Gem so if there is anything that can be done better or you would like to see tweaked, please send me a push request.