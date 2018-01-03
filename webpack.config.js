var webpack=require('webpack');

module.exports={
    entry:'./src/app.js',
    output:{
        path:_dirname+'/build',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    plugins:['transform-runtime'],//插件
                    presets:['es2015','react','stage-2']
                }
            },{
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
}