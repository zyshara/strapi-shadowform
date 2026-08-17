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

export interface AllString extends Struct.ComponentSchema {
  collectionName: 'components_all_strings';
  info: {
    displayName: 'String';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface DomeOfDoomArtistDerived extends Struct.ComponentSchema {
  collectionName: 'components_dome_of_doom_artist_deriveds';
  info: {
    description: 'Layer 2: computed from bandcamp_raw_data on every sync. System-owned, always overwritten - never hand-edited.';
    displayName: 'Dome of Doom Artist Derived';
  };
  attributes: {
    bandcamp_image: Schema.Attribute.String;
    bandcamp_url: Schema.Attribute.String;
    name: Schema.Attribute.String;
    spotify_description: Schema.Attribute.Text;
    spotify_url: Schema.Attribute.String;
  };
}

export interface DomeOfDoomArtistOverrides extends Struct.ComponentSchema {
  collectionName: 'components_dome_of_doom_artist_overrides';
  info: {
    description: 'Layer 3: human-owned corrections. Sync never touches this - base placeholder, to be fleshed out.';
    displayName: 'Dome of Doom Artist Overrides';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    profile_picture: Schema.Attribute.Media<'images'>;
  };
}

export interface DomeOfDoomCatalogItemDerived extends Struct.ComponentSchema {
  collectionName: 'components_dome_of_doom_catalog_item_deriveds';
  info: {
    description: 'Layer 2: computed from raw_item on every sync. System-owned, always overwritten - never hand-edited. label_role here is a SUGGESTION only - see overrides.label_role for the confirmed value.';
    displayName: 'Dome of Doom Catalog Item Derived';
  };
  attributes: {
    artists: Schema.Attribute.Relation<
      'manyToMany',
      'api::dome-of-doom-artist.dome-of-doom-artist'
    >;
    artwork_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    formats: Schema.Attribute.Relation<
      'manyToMany',
      'api::dome-of-doom-format.dome-of-doom-format'
    >;
    label_role: Schema.Attribute.Enumeration<
      ['reissue', 'original', 'physical', 'other']
    >;
    packages: Schema.Attribute.JSON;
    publish_date: Schema.Attribute.DateTime;
    release_date: Schema.Attribute.DateTime;
    suggested_type: Schema.Attribute.Enumeration<
      ['album', 'ep', 'single', 'compilation', 'sample_pack']
    >;
    title: Schema.Attribute.String;
    tracks: Schema.Attribute.JSON;
  };
}

export interface DomeOfDoomCatalogItemOverrides extends Struct.ComponentSchema {
  collectionName: 'components_dome_of_doom_catalog_item_overrides';
  info: {
    description: "Layer 3: human-owned corrections. Sync never touches this. Any field left unset here falls back to derived's own value (title/description/type) or suggestion (label_role).";
    displayName: 'Dome of Doom Catalog Item Overrides';
  };
  attributes: {
    catalog_number: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    label_role: Schema.Attribute.Enumeration<
      ['reissue', 'original', 'physical', 'other']
    >;
    primary_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['album', 'ep', 'single', 'compilation', 'sample_pack']
    >;
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
    download: Schema.Attribute.String;
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
    name: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
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
    links: Schema.Attribute.Component<'shared.link-v2', true>;
  };
}

export interface ShadowformEngineeringProjects extends Struct.ComponentSchema {
  collectionName: 'components_shadowform_engineering_projects';
  info: {
    displayName: 'Engineering Projects';
    icon: 'cursor';
  };
  attributes: {
    badge: Schema.Attribute.Media<'images'>;
    bottom_tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::guestbook-tag.guestbook-tag'
    >;
    header: Schema.Attribute.Component<'shadowform.header', false>;
    slug: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
    top_tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::guestbook-tag.guestbook-tag'
    >;
    url: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface ShadowformEngineeringWebArchiveProject
  extends Struct.ComponentSchema {
  collectionName: 'components_shadowform_engineering_web_archive_projects';
  info: {
    displayName: 'Engineering Web Archive Project';
    icon: 'earth';
  };
  attributes: {
    card: Schema.Attribute.Component<'shadowform.engineering-projects', false>;
    engineering_web_archive_project: Schema.Attribute.Relation<
      'oneToOne',
      'api::engineering-web-archive-project.engineering-web-archive-project'
    >;
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

export interface SharedLinkV2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_v2s';
  info: {
    displayName: 'Link v2';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Relation<'oneToOne', 'api::url.url'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'all.link': AllLink;
      'all.link-w-image': AllLinkWImage;
      'all.string': AllString;
      'dome-of-doom.artist-derived': DomeOfDoomArtistDerived;
      'dome-of-doom.artist-overrides': DomeOfDoomArtistOverrides;
      'dome-of-doom.catalog-item-derived': DomeOfDoomCatalogItemDerived;
      'dome-of-doom.catalog-item-overrides': DomeOfDoomCatalogItemOverrides;
      'epk-page-components.featured-tracks': EpkPageComponentsFeaturedTracks;
      'epk-page-components.photos-and-media': EpkPageComponentsPhotosAndMedia;
      'epk-page-components.press': EpkPageComponentsPress;
      'shadowform.artist-card': ShadowformArtistCard;
      'shadowform.engineering-projects': ShadowformEngineeringProjects;
      'shadowform.engineering-web-archive-project': ShadowformEngineeringWebArchiveProject;
      'shadowform.header': ShadowformHeader;
      'shared.link-v2': SharedLinkV2;
    }
  }
}
