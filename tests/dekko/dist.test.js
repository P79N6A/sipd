const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('sipd-with-locales.js')
  .hasFile('sipd-with-locales.min.js')
  .hasFile('sipd.css')
  .hasFile('sipd.min.css')
  .hasFile('sipd.js')
  .hasFile('sipd.min.js')
  .hasFile('sipd.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
