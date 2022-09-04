'use strict';

/**
 * akeos-releases service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::akeos-releases.akeos-releases');
