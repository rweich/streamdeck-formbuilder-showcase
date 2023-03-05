import { Streamdeck } from '@rweich/streamdeck-ts';

import { onNewAllInputsSettings } from './allInputs/AllInputsAction';
import { onNewAllRangesSettings } from './allRanges/AllRangesAction';
import { onNewShowAndHideSettings } from './showAndHide/ShowAndHideAction';
import { onNewSimpleSettings } from './simple/SimpleAction';
import { onNewWithDetailsSettings } from './withDetails/WithDetailsAction';

const plugin = new Streamdeck().plugin();

plugin.on('willAppear', ({ context }) => plugin.getSettings(context));
plugin.on('didReceiveSettings', ({ action, context, settings }) => {
  switch (action.split('.').pop()) {
    case 'allinputsaction':
      onNewAllInputsSettings(plugin, context, settings);
      break;
    case 'allrangesaction':
      onNewAllRangesSettings(plugin, context, settings);
      break;
    case 'showandhideaction':
      onNewShowAndHideSettings(plugin, context, settings);
      break;
    case 'simpleaction':
      onNewSimpleSettings(plugin, context, settings);
      break;
    case 'withdetailsaction':
      onNewWithDetailsSettings(plugin, context, settings);
      break;
    default:
      throw new Error('no init function for action: ' + action);
  }
});

export default plugin;
