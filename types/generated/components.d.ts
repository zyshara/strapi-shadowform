import type { Schema, Struct } from '@strapi/strapi';

export interface AllLink extends Struct.ComponentSchema {
  collectionName: 'components_all_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.Relation<'oneToOne', 'api::text.text'>;
    name: Schema.Attribute.String;
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

export interface EpkPageComponentsFeaturedTracks
  extends Struct.ComponentSchema {
  collectionName: 'components_epk_page_components_featured_tracks';
  info: {
    displayName: 'Featured Tracks';
    icon: 'headphone';
  };
  attributes: {
    file: Schema.Attribute.Media<'files' | 'audios'>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface EpkPageComponentsPhotosAndMedia
  extends Struct.ComponentSchema {
  collectionName: 'components_epk_page_components_photos_and_medias';
  info: {
    displayName: 'Photos & Media';
    icon: 'picture';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface EpkPageComponentsPress extends Struct.ComponentSchema {
  collectionName: 'components_epk_page_components_presses';
  info: {
    displayName: 'Press';
    icon: 'layout';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    source: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ShadowformArtistCard extends Struct.ComponentSchema {
  collectionName: 'components_shadowform_artist_cards';
  info: {
    displayName: 'Artist Card';
  };
  attributes: {
    artist: Schema.Attribute.Relation<'oneToOne', 'api::artist.artist'>;
    links: Schema.Attribute.Component<'all.link', true>;
  };
}

export interface ShadowformHeader extends Struct.ComponentSchema {
  collectionName: 'components_shadowform_headers';
  info: {
    displayName: 'Header';
    icon: 'heart';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all.link': AllLink;
      'all.link-w-image': AllLinkWImage;
      'epk-page-components.featured-tracks': EpkPageComponentsFeaturedTracks;
      'epk-page-components.photos-and-media': EpkPageComponentsPhotosAndMedia;
      'epk-page-components.press': EpkPageComponentsPress;
      'shadowform.artist-card': ShadowformArtistCard;
      'shadowform.header': ShadowformHeader;
    }
  }
}
