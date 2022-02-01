# noop

[![npm](https://img.shields.io/npm/v/@codemeistre/noop.svg)](https://www.npmjs.com/package/@codemeistre/noop)
[![npm downloads](https://img.shields.io/npm/dt/@codemeistre/noop.svg)](https://www.npmjs.com/package/@codemeistre/noop)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@codemeistre/noop.svg)](https://www.npmjs.com/package/@codemeistre/noop)

This package has no code! You must use it when you want to override another package.

## Instalation

You shouldn't install this in your project by yourself. See below.

## Usage

Let's say your project has some dependency that depends on `@nuxtjs/opencollective` package just to run `opencollective || exit 0` on `postinstall`  
But you don't want this package because you know that it just display AD in your terminal (and it comes with a bunch of useless dependencies).

### NPM

> This requires Git.

If you're using NPM v8, you can override that package by another one using the [overrides feature](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) along with [URLs as dependencies feature](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#urls-as-dependencies) by adding this entry to your `package.json`:

```
"overrides": {
  "@nuxtjs/opencollective": "https://github.com/codemeistre/shared/tree/master/packages/noop"
}
```

### Yarn

If you're using Yarn v1, you can override that package by another one using the [resolutions feature](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions) along with [`npm` protocol](https://yarnpkg.com/features/protocols) by adding this entry to your `package.json`:

```
"resolutions": {
  "@nuxtjs/opencollective": "npm:@codemeistre/noop"
}
```

## License

MIT
