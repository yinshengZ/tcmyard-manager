const mix = require('laravel-mix');
var path = require('path');
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
    '@':path.resolve(__dirname,'resources/admin/src')
});


 /*
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
    original settings, may need to revert back later*/

    mix.js('resources/admin/src/main.js', 'public/admin/static/js')
    
    .sass('resources/admin/src/styles/index.scss','public/admin/static/css')
    .options({autoprefixer:false})
    .vue({version: 2});
