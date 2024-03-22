import type { Schema, Attribute } from '@strapi/strapi';

export interface AllReleaseInformation extends Schema.Component {
  collectionName: 'components_all_release_informations';
  info: {
    displayName: 'Release Information';
    icon: 'music';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    release_date: Attribute.Date;
    fanlink: Attribute.String;
    cover_art: Attribute.Media;
    songs: Attribute.Relation<
      'all.release-information',
      'oneToMany',
      'api::song.song'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'all.release-information': AllReleaseInformation;
    }
  }
}
