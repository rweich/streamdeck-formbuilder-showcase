import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isShowAndHideSettings } from './ShowAndHideSettings';

export const onNewShowAndHideSettings = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isShowAndHideSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(settings.showHide, context);
};
