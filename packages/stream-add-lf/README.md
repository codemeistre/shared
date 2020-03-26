# stream-add-lf

A small transform stream that adds line feed (`\n` or `\r\n`) after each line or only after JSON lines.

## Instalation

```bash
# or using NPM
npm i -g stream-add-lf

# using Yarn
yarn add -g stream-add-lf
```

## Usage

```bash
node your-app.js | stream-add-lf #[OPTION]...
```

| Option            | Type      | Default | Description                                                   |
| ----------------- | --------- | ------- | ------------------------------------------------------------- |
| `--version`, `-v` | `boolean` | -       | Show this package's version and exit.                         |
| `--all, -A`       | `boolean` | `false` | Add **LF** (or **CRLF** if using with `-F`) after every line. |
| `--crlf, -F`      | `boolean` | `false` | Use **CRLF** line endings instead of LF line endings.         |

## License

MIT
