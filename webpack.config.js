var path = require("path");

var config = {
    entry: ["./src/app.tsx"],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
};

module.exports = config;