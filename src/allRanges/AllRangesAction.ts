import { Plugin } from '@rweich/streamdeck-ts';

import { defaultSettings, isAllRangesSettings } from './AllRangesSettings';

export const onNewAllRangesSettings = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isAllRangesSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(
    `${settings.rangeDefault}\n${settings.rangeWithMinMaxLabels}\n`
      + `${settings.rangeWithTicks}\n${settings.rangeWithEverything}`,
    context,
  );
};
