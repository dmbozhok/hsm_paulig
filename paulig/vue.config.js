// vue.config.js
module.exports = {
    publicPath: '',
    chainWebpack: config => {
        config.optimization.minimize(false);
        config.plugin('html')
            .tap(args => {
                args[0].minify = false
                return args
            })
    }
}
