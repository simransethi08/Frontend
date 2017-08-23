var webpack = require("webpack");

module.exports = {

    //entry:"./src/01-basic-setup.js",
    //entry:"./src/02-multiplereducers.js",
    // entry:"./src/03-middleware.js",
    entry:"./src/04-async-middleware.js",
    
        
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
                    plugins: ['react-html-attrs','transform-object-rest-spread']
                }
            },    
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },       
        ]
    }
}