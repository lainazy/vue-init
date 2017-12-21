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
  },
  filters: {},
  complete(data, { chalk }) {
    console.log(
      chalk.green(`
        Project initialization finished!
      `),
    );
    if (!data.inPlace) {
      console.log(
        chalk.yellow(`
          cd ${data.destDirName}
          npm run dev
        `),
      );
    }
  },
};
