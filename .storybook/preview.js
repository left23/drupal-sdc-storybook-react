/** @type { import('@storybook/react').Preview } */
import Twig from 'twig';
import drupalFilters from 'twig-drupal-filters';
import '../css/styles.css'; /* Contains reset, base, and utilities styles. */
import '../css/components.css'; /* Contains all components CSS. */

function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}

setupFilters(Twig);

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
