'use strict';

/**
 * guestbook-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guestbook-entry.guestbook-entry');
