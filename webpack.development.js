var path = require('path');

module.exports = env => {
    console.log("Environment: " + env);
    return {
        mode: "development",
        /* entry: {
            path: path.resolve(__dirname, 'src'),
            filename: 'chain.js'
        }, */
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'chain.js'
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        },
    }
};