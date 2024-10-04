import { defineConfig } from "vite"
import yml from '@modyfi/vite-plugin-yaml';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
import path from 'path';
import glob from 'glob';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        storybook: join(__dirname, "./components"),
        // Other namespaces maybe be added.
      },
    }),
    // Allows Storybook to read data from YAML files.
    yml(),
    viteStaticCopy({
      targets: [
      {
        src: './components/**/*.{png,jpg,jpeg,svg,webp,mp4}',
        dest: 'images',
      }],
    }),
    checker({
      eslint: {
        lintCommand: 'eslint "./components/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./components/**/*.css"',
      },
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname,'./**/*.{css,js}')),
      output: {
        assetFileNames: 'css/[name].css',
        entryFileNames: 'js/[name].js',
      },
    },
  },
})
