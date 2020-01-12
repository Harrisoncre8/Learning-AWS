# Learning Amazon Web Services

## Description

Duration: 2 Days

What problem did you solve? How did you solve it?
Using what I know from working with the SERN stack, I was able to learn how to upload an image to AWS S3 storage as well as retrieve images from that storage within this application. I also used the Amplify Framework to help me with this feature.

<!-- To see the fully functional site, please visit: DEPLOYED VERSION OF APP -->

## Wireframe

<!-- ![Screenshot 1](wireframes/image1.png)
![Screenshot 2](wireframes/image2.png)
![Screenshot 3](wireframes/image3.png) -->

### Prerequisites

* https://nodejs.org/en/
* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html
* https://aws-amplify.github.io/docs/js/start?platform=purejs

## Installation
This is a step by step list for how another developer could get this project up and running.

1. Set up react app and add a webpack.config.js directory
2. Set up an account on console.aws.amazon.com
3. Install and configure the Amplify CLI
    * $ npm install -g @aws-amplify/cli
    * $ amplify configure
    * Create AWS profile locally
4. Add to package.JSON with
    * {
    "name": "amplify-js-app",
    "version": "1.0.0",
    "description": "Amplify JavaScript Example",
    "dependencies": {
        "@aws-amplify/api": "latest",
        "@aws-amplify/pubsub": "latest"
    },
    "devDependencies": {
        "webpack": "^4.17.1",
        "webpack-cli": "^3.1.0",
        "copy-webpack-plugin": "^4.5.2",
        "webpack-dev-server": "^3.1.5"
    },
    "scripts": {
        "start": "webpack && webpack-dev-server --mode development",
        "build": "webpack"
    }
    }
    * $ npm install
4. Add the following code to webpack.config.js file:
    * const CopyWebpackPlugin = require('copy-webpack-plugin');
    const webpack = require('webpack');
    const path = require('path');
    module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin(['index.html']),
        new webpack.HotModuleReplacementPlugin()
    ]
};
5. Run the app and navigate to http://localhost:8080/
6. To set up the backend, enter this in the terminal command line:
    * npm amplify init #accept defaults
    * How it Works: Rather than configuring each service through a constructor or constants file, Amplify supports configuration through a centralized file called aws-exports.js which defines all the regions and service endpoints to communicate. Whenever you run amplify push, this file is automatically created allowing you to focus on your application code. The Amplify CLI will place this file in the appropriate source directory configured with amplify init.
    * To verify that we have CLI set up for our app we can run:
        * $ amplify status
7. To add a storage using amazon S3 type this into the command line in the terminal:
    * $ amplify add storage
    * Then choose "Content" for storage typea
    * Choose your preferences for data storage and authentication/authorization 
8. Run command below in command line to create the service in our account
    * $ amplify push

## Usage
You can use this applicaiton to learn more about Amazon Web Services as well as be able to retrieve and store images. 

## Built With
* AWS
* S3
* Bucket
* JavaScript
* Express
* Node

## Acknowledgement
Thanks to Prime Digital Academy in Minneapolis who helped provide the foundation for me to be able to explore new technologies efficiently.

## Support
If you have suggestions or issues, please email me at harrisonnguyen517@gmail.com
