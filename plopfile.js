const promptDirectory = require('inquirer-directory');

const componentTemplatesPath = 'plop-templates/component';

module.exports = function (plop) {
  plop.setPrompt('directory', promptDirectory);
  plop.setGenerator('component', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'directory',
        name: 'directory',
        message: 'Select directory',
        basePath: 'src',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: `${componentTemplatesPath}/component.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: `${componentTemplatesPath}/module.css.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: 'src/{{directory}}/{{pascalCase name}}/index.ts',
        templateFile: `${componentTemplatesPath}/index.hbs`,
        abortOnFail: true,
      },
    ],
  });
};
