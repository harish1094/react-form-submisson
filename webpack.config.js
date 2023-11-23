module.exports = {
    //https://webpack.js.org/configuration/watch/#watchoptionsignored
    watchOptions: {
        ignored: ["**/node_modules", "**/auth_manager"]
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            react: path.resolve("./node_modules/react")
        }
    }
};
