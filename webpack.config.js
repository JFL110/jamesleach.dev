const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const fs = require('fs');

// Plugin to execute any code after compilation
const ArbitraryCodeAfterReload = function (cb) {
  this.apply = function (compiler) {
    if (compiler.hooks && compiler.hooks.done) {
      compiler.hooks.done.tap('webpack-arbitrary-code', cb);
    }
  };
};

const swapVersions = () => {
  console.log('Swapping versions')
  const homePage = './dist/home.html';
  const content = fs.readFileSync(homePage, { encoding: 'utf8', flag: 'r' });
  fs.writeFileSync(homePage, content.replace("?v=x", "?v=" + new Date().getTime()))
};

module.exports = env => ({
  entry: {
    app: "./js/index.js",
    pdfVersion: "./js/pdf/pdfVersionIndex.js"
  },
  output: {
    filename: ({ chunk }) => {
      const prefix = chunk.name == "app" ? "" : "pdf-";
      return "./static/" + prefix + "bundle.js";
    },
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: './static/[hash:8].[name].bundle.js',
    publicPath: "/"
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
  devServer: {
    writeToDisk: true,
    historyApiFallback: {
      index: '/dist/home.html'
    }
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'async',
    // },
  },
  plugins: [
    new SitemapPlugin('https://www.jamesleach.dev', ['/cv'], {
      filename: '/static/sitemap.xml',
      lastmod: true,
    }),
    // new BundleAnalyzerPlugin(),
    // Compression plugins
    env.NODE_ENV === 'production' && new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
    }),
    env.NODE_ENV === 'production' && new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
    }),
    // Copy static content plugin
    new CopyPlugin({
      patterns: [
        // Copy everything except home page to static
        {
          from: './web',
          to: './static/',
          globOptions: {
            ignore: ['**/home.html'],
          },
        },
        // Copy homepage to static
        {
          from: './web/home.html',
          to: './home.html',
        },
      ],
    }),
    new ArbitraryCodeAfterReload(swapVersions),
  ].filter(Boolean),
  mode: "development",
  module: {
    rules: [
      // Image inline
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10 * 1024,
          name: './static/[hash:8].[name].[ext]',
        }
      },
      // Image optimise - webp
      {
        test: /\.(webp.jpe?g)$/i,
        loader: 'image-webpack-loader',
        enforce: 'pre',
        options: {
          webp: {
            quality: 75
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
            plugins: ["@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-partial-application",
              "@babel/plugin-proposal-logical-assignment-operators",
              "@babel/plugin-proposal-throw-expressions",
              "@babel/plugin-transform-react-constant-elements",
              "@babel/plugin-syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
})
