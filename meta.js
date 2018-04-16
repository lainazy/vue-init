const path = require('path');
const fs = require('fs');

/**
 * Sorts dependencies in package.json alphabetically.
 * They are unsorted because they were grouped for the handlebars helpers
 * @param {object} data Data from questionnaire
 */
function sortDependencies(data) {
  // Code from https://github.com/vuejs-templates/webpack/blob/develop/utils/index.js
  const packageJsonFile = path.join(data.inPlace ? '' : data.destDirName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile));
  packageJson.devDependencies = sortObject(packageJson.devDependencies);
  packageJson.dependencies = sortObject(packageJson.dependencies);
  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2) + '\n');
}

function sortObject(object) {
  // Based on https://github.com/yarnpkg/yarn/blob/v1.3.2/src/config.js#L79-L85
  const sortedObject = {};
  Object.keys(object)
    .sort()
    .forEach(item => {
      sortedObject[item] = object[item];
    });
  return sortedObject;
}

module.exports = {
  helpers: {},
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    vuex: {
      type: 'confirm',
      message: 'Install vuex?',
    },
    test: {
      type: 'confirm',
      message: 'Setup unit tests (use Karma and Mocha) and e2e tests (use Nightwatch)?',
    },
  },
  filters: {
    'config/test.env.js': 'test',
    'build/webpack.test.conf.js': 'test',
    'test/**/*': 'test',
    'src/data/config/test.env.js': 'test',
    'src/store/**/*': 'vuex',
  },
  complete(data, { chalk }) {
    sortDependencies(data);
  },
};
