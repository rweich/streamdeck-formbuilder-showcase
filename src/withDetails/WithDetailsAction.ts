import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isWithDetailsSettings } from './WithDetailsSettings';

export const onNewWithDetailsSettings = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isWithDetailsSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(`${settings.valueOne}`, context);
};
