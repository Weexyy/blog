/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    config: {
      /** blog title */
      title: string;
      /** your name */
      author: string;
      /** website description */
      desc: string;
      /** your deployed domain */
      website: string;
      /** your locale */
      locale: keyof typeof import('./i18n.ts').LANGUAGES;
      /** theme style */
      themeStyle: 'light' | 'auto' | 'dark';
      /** your header info */
      header: Object<{
        twitter: String;
      }>,
    }
    translate: (key: string, param?: string | number) => string;
  }
}