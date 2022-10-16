import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type WithDetailsSettings, defaultSettings, isWithDetailsSettings } from './WithDetailsSettings';

export const initWithDetailsPi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<WithDetailsSettings>(isWithDetailsSettings(settings) ? settings : defaultSettings);

  builder.addElement('valueOne', builder.createInput().setLabel('label one').setPlaceholder('ONE'));
  builder.addHtml(builder.createDetails().addHeadline('just a headline with no / the default summary'));
  builder.addHtml(builder.createDetails().addSummary('with a headline').addHeadline('a headline and a summary'));
  builder.addHtml(
    builder
      .createDetails()
      .addSummary('with headline and paragraph')
      .addHeadline('a headline')
      .addParagraph('a paragraph'),
  );
  builder.addHtml(
    builder
      .createDetails()
      .addSummary('with just two paragraphs')
      .addParagraph(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      )
      .addParagraph(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ),
  );
  builder.addHtml(
    builder
      .createDetails()
      .addSummary('multi-headline, multi-paragraphs')
      .addHeadline('a headline')
      .addParagraph(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      )
      .addHeadline('another headline')
      .addParagraph(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
  );

  const span = document.createElement('span');
  span.textContent = 'some text in a <span>';
  span.style.color = 'green';
  const template = document.createElement('template');
  template.innerHTML = `
      <table style="width: 100%">
        <thead><tr><td>#</td><td>text</td></tr></thead>
        <tbody>
          <tr><td>1</td><td>one</td></tr>
          <tr><td>2</td><td>two</td></tr>
          <tr><td>3</td><td>three</td></tr>
        </tbody>
      </table>
    `;
  builder.addHtml(
    builder
      .createDetails()
      .addSummary('with arbitary html elements')
      .addElement(span)
      .addElement(template.content.querySelector('table') || document.createElement('div')),
  );

  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/150';
  builder.addHtml(
    builder
      .createDetails()
      .addSummary('with an image')
      .addElement(image)
      .addParagraph('... from https://placeholder.com'),
  );

  builder.addHtml(
    builder
      .createDetails()
      .addSummary('with a link using markdown')
      .addParagraph('see the [streamdeck-formbuilder](https://github.com/rweich/streamdeck-formbuilder) on github'),
  );

  // the click-link event is emitted when the user clicks any link inside a paragraph
  // its necessary to forward that to the streamdeck via openUrl(), or nothing happens on click!
  // the callback needs to be attached only once (even with multiple links)
  builder.on('click-link', (link) => pi.openUrl(link.href));

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
