const spid = require('./components');

const req = require.context('./components', true, /^\.\/locale-provider\/.+_.+\.tsx$/);

spid.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  spid.locales[matches[1]] = req(mod).default;
});

module.exports = spid;
