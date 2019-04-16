const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isDev) => {

    const rules = [
        {
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [[
                        "@babel/preset-env", {
                            "useBuiltIns": "usage",
                            "debug":true
                        }
                    ]]
                }
            }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: isDev,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: isDev
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDev,
                        quiet: true
                    }
                }
            ]
        }
    ];

    return {
        rules: rules
    };

};
