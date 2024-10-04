# Drupal Theme with SDC and Storybook

See vite.config.js for plugins used.
`import twig from 'vite-plugin-twig-drupal'`
"A Vite plugin based on Twig JS for compiling Twig-based components into a
JavaScript function so that they can be used as components with Storybook. It
allows you to import Twig files into your story as though they are JavaScript
files."
See https://github.com/larowlan/vite-plugin-twig-drupal
and
https://www.previousnext.com.au/blog/drupal-front-end-nirvana-vite-twig-and-storybook

Also see https://mariohernandez.io/tag/storybook/

Optional: Use Drupal Storybook module for `stories` and `story` twig tags.
Run `drush storybook:generate-all-stories` to generate json files for the
components. See https://www.lullabot.com/articles/new-storybook-module-drupal

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
