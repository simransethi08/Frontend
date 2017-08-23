var webpack = require("webpack");

module.exports = {

    entry:"./src/index.js",

    // output: 
    // {path: __dirname + '/dist', 
    // filename: 'assets/bundle.js'} ,

    output:{
        path:"/dist/assets",
        filename:"bundle.js",
        publicPath:"assets"
    },

    devServer:{
        inline:true,
        contentBase: './dist',
        port:9876
    },

    module:{
        loaders:[
             {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs']
                }
            },    
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },       
        ]
    }
}