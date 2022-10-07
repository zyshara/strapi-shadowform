'use strict';

/**
 * releases service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::releases.releases');
