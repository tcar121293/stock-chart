const webpack = require('webpack')
const path = require('path')

module.exports ={
devtool:'inline-sourcemap',
entry: path.join(__dirname, 'client/index.js'),
output:{
path:path.join(__dirname, 'client/public'),
filename:'bundle.js'
},
module:{
    loaders:[
        {
            test:/\.js$/,
            include:path.join(__dirname, 'client'),
            loaders:'babel-loader',
            exclude: /(node_modules)/,
            query:{
                presets:['react', 'es2015', "stage-3"],
                plugins: ["transform-object-rest-spread", 'recharts']
                
            }
    },
    {
        test:/\css$/,
        use:[
            'style-loader',
            'css-loader'
        ]
    }
]
}

}