export const config = {
    featureFlags: {
        enableGPT5Mini: true,
    },
    environment: process.env.NODE_ENV || 'development',
    apiEndpoint: process.env.API_ENDPOINT || 'http://localhost:3000/api',
};