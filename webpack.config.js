'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: ['./src/js/main.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader',
                    },
                    {
                        //interprets `@import` and `url()` like `import/require()` and will resolve them 
                        loader: 'css-loader',
                    },
                    {
                        // loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer,
                                ],
                            },
                        },
                    },
                    {
                        // loads a sass/scss file and compiles it to CSS
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
}