const myWebpack = require('../webpack.config');

module.exports = {
  webpackFinal: (config) => {
    config.resolve = myWebpack.resolve
    return config
  },
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register']
}