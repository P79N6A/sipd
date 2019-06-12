/* eslint-disable import/no-dynamic-require, no-console */
const chalk = require('chalk');
const path = require('path');
const fetch = require('node-fetch');
const simpleGit = require('simple-git/promise');

const cwd = process.cwd();
const git = simpleGit(cwd);

const { version } = require(path.resolve(cwd, 'package.json'));

function exitProcess(code = 1) {
  console.log(''); // Keep an empty line here to make looks good~
  process.exit(code);
}

async function checkVersion() {
  const res = await fetch('http://registry.npmjs.org/sipd').then(response => response.json());
  if (!res.error) {
    const { versions } = res;
    if (version in versions) {
      console.log(chalk.yellow('😈 Current version already exists. Forget update package.json?'));
      console.log(chalk.cyan(' => Current:'), version);
      exitProcess(0);
    }
  }
}

async function checkBranch({ current }) {
  if (current !== 'master') {
    console.log(chalk.yellow('🤔 You are not in the master branch!'));
    exitProcess(0);
  }
}

async function checkCommit({ files }) {
  if (files.length) {
    console.log(chalk.yellow('🙄 You forgot something to commit.'));
    files.forEach(({ path: filePath, working_dir: mark }) => {
      console.log(' -', chalk.red(mark), filePath);
    });
    exitProcess(0);
  }
}

async function checkRemote() {
  const { remote } = await git.fetch('origin', 'master');
  if (remote.indexOf('sipd') === -1) {
    console.log(chalk.yellow('😓 Your remote origin is not sipd. Do you fork it?'));
    exitProcess(0);
  }
}

async function checkAll() {
  const status = await git.status();

  await checkVersion();

  await checkBranch(status);

  await checkCommit(status);

  await checkRemote();
}

checkAll();
