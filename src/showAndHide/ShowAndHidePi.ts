import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type ShowAndHideSettings, defaultSettings, isShowAndHideSettings } from './ShowAndHideSettings';

export const initShowAndHidePi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<ShowAndHideSettings>(isShowAndHideSettings(settings) ? settings : defaultSettings);

  // create one of each input fields available
  builder.addElement(
    'showHide',
    builder
      .createDropdown()
      .addOption('show the field', 'show')
      .addOption('hide the field', 'hide')
      .setLabel('show or hide?'),
  );
  builder.addElement(
    'textOnShow',
    builder
      .createInput()
      .setLabel('textfield')
      .showOn(() => builder.getFormData().showHide === 'show'),
  );

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
