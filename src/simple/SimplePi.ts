import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type SimpleSettings, defaultSettings, isSimpleSettings } from './SimpleSettings';

export const initSimplePi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<SimpleSettings>(isSimpleSettings(settings) ? settings : defaultSettings);

  // create a text input and bind it to the property
  builder.addElement('valueOne', builder.createInput().setLabel('label one').setPlaceholder('ONE'));
  builder.addElement('valueTwo', builder.createInput().setLabel('label two').setPlaceholder('TWO'));

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
