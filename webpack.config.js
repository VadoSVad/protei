const path = require('path')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/js/index.js'),
    entry: path.resolve(__dirname, './src') + '/js/index.js',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}
