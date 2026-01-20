'use strict';

/**
 * nail-polish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nail-polish.nail-polish');
