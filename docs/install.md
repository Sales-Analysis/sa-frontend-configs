To install a package you have to do the following steps:

1. Generate token at [settings](https://github.com/settings/tokens) page.
   For to do that, click on `Generate new token`. Select follow options:
- `read:packages`
- `write:packages`

2. Authenticate for a current directory at Github-registry via npm:

```shell
$ npm login --registry=https://npm.pkg.github.com`
> Username: YOUR-GITHUB-USERNAME
> Password: GITHUB-TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

3. Add to the .npmrc file at your project following lines:

- `@gpn-prototypes:registry=https://npm.pkg.github.comz`

4. To install the package running the command below:

```shell
$ yarn add @gpn-prototypes/frontend-configs
```

6. Creating your configuration and extending configuration from sa-frontend-configs:

```javascript
module.exports = {
...require("@gpn-prototypes/frontend-configs/jest/jest.config.js"),
// Set up here a custom options
};
```
