const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('spid-with-locales.js')
  .hasFile('spid-with-locales.min.js')
  .hasFile('spid.css')
  .hasFile('spid.min.css')
  .hasFile('spid.js')
  .hasFile('spid.min.js')
  .hasFile('spid.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
