const mix = require('laravel-mix');
var vue_admin_path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.alias({
    '@':vue_admin_path.join(__dirname,'resources/admin/src')
});


 /*
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
    original settings, may need to revert back later*/

    mix.js('resources/admin/src/main.js', 'public/admin/static/js').vue({version: 2});
