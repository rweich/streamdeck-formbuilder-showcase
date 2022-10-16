import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isSimpleSettings } from './SimpleSettings';

export const onNewSimpleSettings = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isSimpleSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(`${settings.valueOne}\n${settings.valueTwo}`, context);
};
