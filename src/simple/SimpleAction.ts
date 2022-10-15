import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isSimpleSettings } from './SimpleSettings';

export const initSimpleAction = (plugin: Plugin, context: string) => {
  plugin.on('didReceiveSettings', (event) => {
    const settings = isSimpleSettings(event.settings) ? event.settings : defaultSettings;

    // just set the title to whatever the new values are ...
    plugin.setTitle(`${settings.valueOne}\n${settings.valueTwo}`, context);
  });
  plugin.getSettings(context);
};
