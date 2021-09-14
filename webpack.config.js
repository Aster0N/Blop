
const path = require('path');
module.exports = {
    // entry: {
    //     app: './src/main.js'
    // },
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, './dist'),
    //     publicPath: '/dist'
    // },

    module: {
        rules: [
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ],
    },
    devServer: {
        overlay: true
    },
}