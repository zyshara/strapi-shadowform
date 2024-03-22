module.exports = {
   upload: {
      breakpoints: {
         small: 500,
      },
      config: {
         provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
         providerOptions: {
            serviceAccount: env.json('GCS_SERVICE_ACCOUNT'), 
            bucketName: env('GCS_BUCKET_NAME'),
            publicFiles: true,
         },
      },
   },
}
