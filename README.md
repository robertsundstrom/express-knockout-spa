# express-knockout-spa
Template for Knockout SPA on Express.js using SystemJS.

## Run

Make sure that you have JSPM installed:

    $ npm install -g jspm@beta

To install and run the application:

    $ npm install   # Installs SystemJS/JSPM dependencies
    $ npm start

## Bundling

To bundle everything into one minified JavaScript file and then inject it:

    $ jspm bundle app --minify --inject

Note: Pages, view models and components are not bundled by default. This is because of a limitation in the loader implementation. That is why you have to include them explicitly:

    $ jspm bundle app + components/home-page/home --minify --inject