import type { Schema, Struct } from '@strapi/strapi';

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'SocialLinks';
    icon: 'heart';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['EPK', 'Spotify', 'Website', 'Linktree']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
