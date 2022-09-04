'use strict';

/**
 * akeos-release service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::akeos-release.akeos-release');
