# Website for Cultures Squad

## Build Setup

``` bash
# install dependencies (execute command in project root)
$ yarn install

# install dependencies for culture-squad cache api (navigate to culture-squad-cache-api folder and execute command)
$ yarn install

# while in culture-squad-cache-api folder, execute command
$ npm run dev

# Then navigate back to project root
# serve website with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate:staging
$ yarn generate:production
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

#

```
NOTES:

- preferred template completely rewritten in Bootstrap 4 and adjusted to Vue environment

- chosen Bootstrap 4 (facilitates development, very well documented for Vue components, many available themes etc.)

- added responsivity for different screens sizes

- website not directly connected to Edgeryders Discourse API but to cache middleware mini application written in NodeJS/Express (cache duration set to 120sec at the moment)
```
