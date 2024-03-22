'use strict';

/**
 * compilation router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::compilation.compilation');
