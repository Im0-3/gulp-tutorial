module.exports = {
    output: {
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
    ]
};