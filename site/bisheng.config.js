const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;
const replaceLib = require('antd-tools/lib/replaceLib');

const isDev = process.env.NODE_ENV === 'development';
const usePreact = process.env.REACT_ENV === 'preact';

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      // eslint-disable-next-line
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1,
      );
      // Add babel-plugin-add-react-displayname
      rule.options.plugins.push(require.resolve('babel-plugin-add-react-displayname'));
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  port: 8001,
  hash: true,
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.zh-CN.md', 'CHANGELOG.en-US.md'],
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    categoryOrder: {
      'Ant Design': 0,
      原则: 1,
      Principles: 1,
      视觉: 2,
      Visual: 2,
      模式: 3,
      Patterns: 3,
      其他: 6,
      Other: 6,
      Components: 100,
    },
    typeOrder: {
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Feedback: 5,
      Other: 6,
      Deprecated: 7,
      通用: 0,
      布局: 1,
      导航: 2,
      数据录入: 3,
      数据展示: 4,
      反馈: 5,
      其他: 6,
      废弃: 7,
    },
    docVersions: {
      '1.0.0': 'http://ant.design',
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    // eslint-disable-next-line
    config.resolve.alias = {
      'sipd/lib': path.join(process.cwd(), 'components'),
      'sipd/es': path.join(process.cwd(), 'components'),
      sipd: path.join(process.cwd(), 'index'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };

    // eslint-disable-next-line
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };

    if (usePreact) {
      // eslint-disable-next-line
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
        'react-router': 'react-router',
        sipd: path.join(process.cwd(), 'index'),
      });
    }

    if (isDev) {
      // eslint-disable-next-line
      config.devtool = 'source-map';
    }

    alertBabelConfig(config.module.rules);

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return config;
  },

  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },
  root: './',
  htmlTemplateExtraData: {
    isDev,
    usePreact,
  },
};
