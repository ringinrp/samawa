/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'samawabedumy-main.test',
                port:'',
                pathname: '/account123/**',
            },
        ],
    },

    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        return config;
    },
};

export default nextConfig;
