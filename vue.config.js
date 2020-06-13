module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styling/utils/_mixins.scss";`,
            },
        },
    },
};
