var path = require('path');

module.exports = env => {
    console.log("Environment: " + env);
    return {
        mode: "production",
        /* entry: {
            path: path.resolve(__dirname, 'src'),
            filename: 'chain.js'
        }, */
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'chain.min.js'
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        },
    }
};