'use strict';

/**
 * compilation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::compilation.compilation');
