var webpack = require('webpack');

module.exports = {

    entry:'./src/index.js',

    output:{
        path:'/dist/assets',
        filename:'bundle.js',
        publicPath:'assets'
    },
    // Iframe mode - page is embeded in an iframe and
    // Inline mode - a small webpack-dev-server client entry
    // is added to the bundle which refreshes the page on change.

    devServer:{
        inline:true,
        contentBase:'./dist',
        port:9876
    },

    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets: ['es2015','react'],
                    plugins:['react-html-attrs']
                }
            },
            {
                test:/\.css$/,
                loaders:'style-loader!css-loader',
            }
        ]
    }
}