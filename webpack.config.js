var path = require('path');
module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{


            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }


        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};