let mix = require('laravel-mix');
require("laravel-mix-purgecss");
require('laravel-mix-tailwind');

mix.js('resources/assets/js/app.js', 'js')
    .postCss('resources/assets/css/app.css', 'css')
    .tailwind()
    .purgeCss();

if (mix.inProduction()) {
    mix.version();
}
