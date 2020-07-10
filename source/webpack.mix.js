const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app/app.scss', 'public/css/app').version();

// Libs
mix.copy('node_modules/lodash/lodash.min.js', 'public/lib/lodash')
    .copy('node_modules/vue/dist/vue.min.js', 'public/lib/vue')
    .copy('node_modules/vuex/dist/vuex.min.js', 'public/lib/vuex')
    .copy('node_modules/vue-router/dist/vue-router.min.js', 'public/lib/vue_router');
