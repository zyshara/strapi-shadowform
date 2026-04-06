'use strict';

/**
 * guestbook router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::guestbook.guestbook');
