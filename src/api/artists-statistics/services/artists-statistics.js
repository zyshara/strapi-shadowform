'use strict';

/**
 * artists-statistics service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artists-statistics.artists-statistics');
