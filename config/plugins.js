// path: ./config/plugins.js

const getServiceAccount = (base64EncodedServiceAccount) => {
    const buff = Buffer.from(base64EncodedServiceAccount, 'base64');
    const serviceAccount = JSON.parse(buff.toString('utf-8'));
    return serviceAccount;
};

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
                bucketName: process.env.GCP_BUCKET_NAME,
                serviceAccount: process.env.GCP_SERVICE_ACCOUNT,
            },
        }
    },
});
