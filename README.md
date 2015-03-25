# Haml-Coffee (Hamlc) Loader for Webpack

Import haml-coffee files as modules in your webpack project. Returns a rendered template.

## Setup

Add to your webpack config module.loaders:

````
{ test: /\.html\.hamlc$/, loader: "haml" }
````

## Rendering templates

### webpack/assets/javascripts/templates/my_template.html.hamlc

````javascript
.template
  %h1= @title
````

### webpack/assets/javascripts/modules/my_module.js

````javascript
require("templates/my_template.html.hamlc")
````

will return the HTML:

````html
<div class="template">
  <h1></h1>
</div>
````

````javascript
require("!haml?title=test!templates/my_template.html.hamlc")
````

will return the HTML:

````html
<div class="template">
  <h1>test</h1>
</div>
````

## AngularJS

`haml-loader` can be nicely chained with `ngtemplate-loader`

````
{ test: /\.html\.hamlc$/, loaders: ['ngtemplate?relativeTo=assets/javascripts', 'haml'] },
````
