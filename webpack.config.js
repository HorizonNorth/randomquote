const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// module.exports = {
//   plugins: [
//     new BundleAnalyzerPlugin()
//   ]
// }

module.exports = {
    entry: ['@babel/polyfill', './src/index.jsx'],
    // mode: "development",
    mode: "production",
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.js'
    },
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'docs')
      },
      compress: true,
      port: 8000
      },

      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ "style-loader","css-loader",]
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-react','@babel/preset-env']
              }
            }
          }
        ]
    }
}