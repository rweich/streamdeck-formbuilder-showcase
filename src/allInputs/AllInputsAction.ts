import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isAllInputsSettings } from './AllInputsSettings';

export const onNewAllInputsSettings = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isAllInputsSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(`${settings.dropdown}\n${settings.text}`, context);
};
