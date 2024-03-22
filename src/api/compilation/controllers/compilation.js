'use strict';

/**
 * compilation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::compilation.compilation');
