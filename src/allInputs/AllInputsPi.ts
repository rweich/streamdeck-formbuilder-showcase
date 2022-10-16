import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type AllInputsSettings, defaultSettings, isAllInputsSettings } from './AllInputsSettings';

export const initAllInputsPi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<AllInputsSettings>(isAllInputsSettings(settings) ? settings : defaultSettings);

  // create one of each input fields available
  builder.addElement(
    'dropdown',
    builder
      .createDropdown()
      .addOption('1st option', '1st')
      .addOption('2nd option', '2nd')
      .addOption('3rd option', '3rd')
      .setLabel('dropdown'),
  );
  builder.addElement('text', builder.createInput().setLabel('textfield').setPlaceholder('text'));

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
