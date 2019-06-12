const sipd = require('./components');

const req = require.context('./components', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

sipd.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  sipd.locales[matches[1]] = req(mod).default;
});

module.exports = sipd;
