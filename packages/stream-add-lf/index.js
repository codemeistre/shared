#!/usr/bin/env node

const parse = require('fast-json-parse');
const minimist = require('minimist');
const pump = require('pump');
const split = require('split2');
const through = require('through2');

const argv = minimist(process.argv.slice(2));

if (argv.version || argv.v) {
  // eslint-disable-next-line global-require
  console.log(require('./package.json').version);
  process.exit(0);
}

/**
 *
 * @param {object} opts
 * @param {boolean} [opts.all=false]
 * @param {boolean} [opts.crlf=false]
 */
const makeAppendSeparator = (opts = { all: false, crlf: false }) => {
  const { all, crlf } = opts;

  /** @type {string} */
  const separator = crlf ? '\r\n' : '\n';

  const appendSeparator = (line) => {
    if (all) {
      return `${line}${separator}`;
    }
    // only if `line` is a valid JSON
    return parse(line).err ? line : `${line}${separator}`;
  };

  return appendSeparator;
};

const appendSeparator = makeAppendSeparator({
  all: argv.all || argv.A,
  crlf: argv.crlf || argv.F,
});

const transport = through.obj(function print(chunk, enc, cb) {
  setImmediate(() => {
    process.stdout.write(`${chunk}\n`, 'utf8', cb);
  });
});

pump(process.stdin, split(appendSeparator), transport, process.stdout);
