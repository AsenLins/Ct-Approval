module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-theme-variables')({
            vars: {
                red: '#F60',
                gray: '#CCC',
                blue: '#03A9F4'
            },
            prefix: '$'
        }),
        require('precss')(),
        require('postcss-calc')(),
        require('autoprefixer')({
            browsers: ['Android >= 4.0', 'iOS >= 7']
        })



    ]
}