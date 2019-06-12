import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('sipd dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const sipd = testDist ? require('../dist/sipd') : require('../components'); // eslint-disable-line
    expect(Object.keys(sipd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have sipd.version', () => {
      const sipd = require('../dist/sipd'); // eslint-disable-line
      expect(sipd.version).toBe(pkg.version);
    });
  }
});
