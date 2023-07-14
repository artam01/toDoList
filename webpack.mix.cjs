const mix = require('laravel-mix');
require('vue-loader');

mix.js('resources/js/app.js', 'public/js')
    .vue() // Add this line to enable Vue compilation
    .sourceMaps(); // Optional: Enable source maps for better debugging
//.sass('resources/sass/app.scss', 'public/css')
//.sourceMaps();

//mix.options({
//hmrOptions: {
//  host: 'localhost', // mysite.test is my local domain used for testing
// port: 8888,
// }
//});

mix.webpackConfig({
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, ],
    },
});