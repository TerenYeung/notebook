module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        // preloaders: [{
        //     test: /\.js/,
        //     loader: 'import-glob'
        // }, {
        //     test: /\.scss/,
        //     loader: 'import-glob'
        // }],



        loaders: [{
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader','import-glob-loader']
        }]
    }
}
