# stream-add-lf

[![npm](https://img.shields.io/npm/v/@codemeistre/stream-add-lf.svg)](https://www.npmjs.com/package/@codemeistre/stream-add-lf)
[![npm](https://img.shields.io/npm/dt/@codemeistre/stream-add-lf.svg)](https://www.npmjs.com/package/@codemeistre/stream-add-lf)

A small transform stream that adds line feed (`\n` or `\r\n`) after each line or only after JSON lines.

## Instalation

```bash
# using NPM
npm i -g @codemeistre/stream-add-lf

# or using Yarn
yarn global add @codemeistre/stream-add-lf
```

## Usage

```bash
node your-app.js | stream-add-lf #[OPTION]...
```

| Option            | Type      | Default | Description                                                   |
| ----------------- | --------- | ------- | ------------------------------------------------------------- |
| `--version`, `-v` | `boolean` | -       | Show this package's version and exit.                         |
| `--all, -A`       | `boolean` | `false` | Add **LF** (or **CRLF** if using with `-F`) after every line. |
| `--crlf, -F`      | `boolean` | `false` | Use **CRLF** (`\r\n`) line endings instead of LF (`\n`).      |

## License

MIT
