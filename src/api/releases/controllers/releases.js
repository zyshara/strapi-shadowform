'use strict';

/**
 * releases controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::releases.releases');
