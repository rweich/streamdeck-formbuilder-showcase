import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type AllRangesSettings, defaultSettings, isAllRangesSettings } from './AllRangesSettings';

export const initAllRangesPi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<AllRangesSettings>(isAllRangesSettings(settings) ? settings : defaultSettings);

  // create one of each input fields available
  builder.addElement('rangeDefault', builder.createRange(0, 100, 5).setLabel('default'));
  builder.addElement(
    'rangeWithMinMaxLabels',
    builder.createRange(1, 100).setLabel('w/ min-max Label').enableMinMaxLabels(),
  );
  builder.addElement('rangeWithTicks', builder.createRange(10, 100, 10).setLabel('w/ ticks').enableTicks());
  builder.addElement(
    'rangeWithEverything',
    builder.createRange(0, 100, 10).setLabel('w/ everything').enableMinMaxLabels().enableTicks(),
  );

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
