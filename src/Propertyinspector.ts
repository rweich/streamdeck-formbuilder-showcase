import { Streamdeck } from '@rweich/streamdeck-ts';

import { initSimplePi } from './simple/SimplePi';

const pi = new Streamdeck().propertyinspector();
pi.on('websocketOpen', ({ uuid }) => pi.getSettings(uuid));
pi.on('didReceiveSettings', ({ action, settings }) => {
  if (pi.pluginUUID === undefined) {
    console.error('pi has no uuid! is it registered already?', pi.pluginUUID);
    return;
  }

  switch (action.split('.').pop()) {
    case 'simpleaction':
      initSimplePi(pi, pi.pluginUUID, settings);
      break;
    default:
      throw new Error('no init function for action: ' + action);
  }
});

export default pi;
