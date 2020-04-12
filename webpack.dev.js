// webpack development setting
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const prefixUri = common.prefixUri;

module.exports = merge(common.settings, {
    mode: 'development',
    devtool: 'inline-source-map',
    // Configuration for dev server
    devServer: {
        // 生成されたファイルをディスクに書き込むかどうか
        writeToDisk: false,
        // ブラウザの表示有無
        open: true,
        // ブラウザの表示ページ
        openPage: prefixUri.substring(1) + '/index.html',
        // HMR (Hot Module Replacement) の有無
        hot: true,
        // Webページリロードの有無
        //inline: true,
        // Webサーバーの公開ディレクトリ
        contentBase: path.join(__dirname, 'public'),
        contentBasePublicPath: prefixUri,
        // Webサーバーの公開ディレクトリの監視有無
        watchContentBase: true,
        // Webサーバーの公開URL
        publicPath: prefixUri + "/"
    }
});
