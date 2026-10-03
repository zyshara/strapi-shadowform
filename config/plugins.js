module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // Reuses the same Gmail SMTP identity as shadowform.net's contact form
  // (server/domeofdoom/contact.js), just sending as the noreply@ alias
  // instead of contact@. Strapi's bundled default (sendmail) does direct-
  // to-MX delivery on port 25, which Heroku blocks outbound on every dyno —
  // confirmed dead via the admin panel's "Send test email" before switching.
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: 'noreply@shadowform.net',
        defaultReplyTo: 'noreply@shadowform.net',
      },
    },
  },
});

