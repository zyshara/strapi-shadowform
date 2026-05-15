'use strict';

/**
 * wedding-rsvp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wedding-rsvp.wedding-rsvp');
