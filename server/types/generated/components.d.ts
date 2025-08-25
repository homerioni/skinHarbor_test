import type { Schema, Struct } from '@strapi/strapi';

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'slider.slider': SliderSlider;
    }
  }
}
