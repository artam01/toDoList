const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').vue()

mix.webpackConfig({
    output: {
        libraryTarget: 'umd',
    }
})
resolve: {
    extensions: ['.*', '.wasm', '.mjs', '.js', '.jsx', '.json', '.vue']
}
