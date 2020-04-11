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

mix.react('resources/js/app.jsx', 'public/js')
    .sass('resources/sass/app/app.scss', 'public/css/app');

mix.react('resources/js/maintain.jsx', 'public/js/maintain')
    .sass('resources/sass/maintain/maintain.scss', 'public/css/maintain');
