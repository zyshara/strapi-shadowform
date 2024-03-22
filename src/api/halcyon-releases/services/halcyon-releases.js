'use strict';

/**
 * halcyon-releases service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::halcyon-releases.halcyon-releases');
