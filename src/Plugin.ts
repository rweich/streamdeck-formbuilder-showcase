import { Streamdeck } from '@rweich/streamdeck-ts';

import { initSimpleAction } from './simple/SimpleAction';

const plugin = new Streamdeck().plugin();

plugin.on('willAppear', ({ action, context }) => {
  switch (action.split('.').pop()) {
    case 'simpleaction':
      initSimpleAction(plugin, context);
      break;
    default:
      throw new Error('no init function for action: ' + action);
  }
});

export default plugin;
