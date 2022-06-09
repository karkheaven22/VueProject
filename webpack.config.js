const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const devMode = process.env.NODE_ENV !== "production"
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATHS = {
  app: path.join(__dirname, 'src'),
  images: path.join(__dirname, 'src/assets/'),
  build: path.resolve(__dirname, 'public')
}

const options = {
  host: 'localhost',
  port: '12345'
}

module.exports = {
  mode: process.env.NODE_ENV,
  devtool:'nosources-source-map',
  entry: {
    app: path.join(PATHS.app, 'main.ts')
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundles/[name].[chunkhash:8].js',
    chunkFilename: 'bundles/[name].[chunkhash:8].js',
    clean: true
  },
  devServer: {
    server: { 
      type: 'http',
      options: {
        cert: "",
        key: "",
      }, 
    },
    compress: true,
    historyApiFallback: true,
    host: options.host,
    port: options.port
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
      { test: /\.css$/i, use: [ 
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          },
        },
        'css-loader',
        'sass-loader'
      ],
      include: [PATHS.app]
    },
      { test: /\.vue$/, loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, options: { appendTsSuffixTo: [/\.vue$/] } },
      { test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/, type: 'asset', generator : { filename: 'fonts/[name].[ext]' } } 
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    },
    modules: [    
      path.resolve('src'),    
      path.resolve('node_modules')  
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    chunkIds: 'named',
    removeEmptyChunks: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions : {
          sourceMap: true,
          format: {
            comments: false,
          }
        }
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      })
    ],
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0, // 避免模块体积过小而被忽略
      minChunks: 1, // 默认也是一表示最小引用次数
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          priority: 30,
          enforce: true,
        },
        defaultVendors: {  //拆分第三方库（通过npm|yarn安装的库）
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true
        },
        elementUI: {      
          name: 'elementUI', // 單獨將 elementUI 拆包      
          priority: 20, // 權重要大於 libs 和 app 否則會被打包進 libs 或者 app      
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,      
          chunks: 'all'    
        },
        vuetify:{
          name: 'vuetify', // 單獨將 elementUI 拆包      
          priority: 20, // 權重要大於 libs 和 app 否則會被打包進 libs 或者 app      
          test: /[\\/]node_modules[\\/]vuetify[\\/]/,      
          chunks: 'all' 
        }
      }
    },
    emitOnErrors: false
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "css/[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "css/[id].[contenthash].css",
      runtime: false,
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin({
      cache: true,
      template: path.join(PATHS.app, 'index.html'),
      output: path.resolve(__dirname, 'dist'),
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: PATHS.images, to: 'assets' }]
    }),
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
      // Thanks to https://stackoverflow.com/a/65018686/14239942
      process: 'process/browser'
   })
   //new BundleAnalyzerPlugin()
    // new VuetifyLoaderPlugin()
  ],
  stats: {
    children: true
  }
}
