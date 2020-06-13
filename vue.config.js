const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styling/utils/_mixins.scss";`,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@components': path.join(__dirname, '/src/components/'),
                '@views': path.join(__dirname, '/src/views/'),
                '@lib': path.join(__dirname, '/src/lib/'),
            },
        },
    },
};
