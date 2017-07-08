# react-inoy
step to instalation package
1. install noje js
2. install yarn => npm install -g yarn
3. yarn init
4. yarn add babel-core
5. yarn add babel-loader
6. yarn add babel-preset-react
7. yarn add babel-preset-es2015
8. yarn add react
9. yarn add react-dom
10. yarn add webpack
11. yarn add webpack-dev-server
12. yarn add styled-component

for start server "yarn start" or "npm start"

# Create Folder in root folder
1. public
2. src

# Create File such as : 
1. .babelrc
2. webpack.config.js


# setup .babelrc
{
  "presets": ["react", "es2015"]
}


# setup webpack.config.js
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

# Modify package.json
  # in object of script change with this
    "scripts": {
        "start": "webpack-dev-server --hot"
    }

