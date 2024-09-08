const withPWA = require("next-pwa")({
    dest: "public",
});

module.exports = withPWA({
    // next.js config
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: false,
    },
});
