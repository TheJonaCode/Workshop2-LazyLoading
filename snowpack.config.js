/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    buildOptions: {
        baseUrl: '/Workshop2-LazyLoading',
    },
}