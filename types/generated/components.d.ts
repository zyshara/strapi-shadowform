import type { Schema, Struct } from '@strapi/strapi';

export interface AllLink extends Struct.ComponentSchema {
  collectionName: 'components_all_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.Relation<'oneToOne', 'api::text.text'>;
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
  };
}

export interface AllLinkWImage extends Struct.ComponentSchema {
  collectionName: 'components_all_link_w_images';
  info: {
    displayName: 'Link with Image';
    icon: 'link';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    label: Schema.Attribute.Relation<'oneToOne', 'api::text.text'>;
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
  };
}

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
      'all.link': AllLink;
      'all.link-w-image': AllLinkWImage;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
