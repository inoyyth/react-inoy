const path = require('path');

var config = {
    "entry": "./src/app.js",
    "output": {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/build")
    },
    "module": {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 7000
    }
};

module.exports = config;
