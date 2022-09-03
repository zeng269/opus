const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules:[
            // js
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            // style/css
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // 图片资源
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                      maxSize: 10 * 1024 // 10kb
                    }
                  }
            },
            // vue
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
    ],
}