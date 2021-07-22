
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
        // postLoaders: [
        //     {
        //         include: path.resolve(__dirname, 'node_modules/pixi.js'),
        //         loader: 'ify'
        //     }
        // ]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         PIXI: 'pixi.js'
    //     })
    // ],
    devServer: {
        overlay: true
    },
}