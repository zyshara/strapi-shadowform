'use strict';

/**
 * guestbook-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guestbook-tag.guestbook-tag');
