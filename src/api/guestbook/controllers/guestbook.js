'use strict';

/**
 * guestbook controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guestbook.guestbook');
