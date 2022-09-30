import { test } from 'uvu';
import * as assert from 'uvu/assert';
import {
  isBoolean,
  isConstructor,
  isEmptyArray,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isUndefined,
} from '../src';

test('isBoolean(value)', () => {
  assert.is(isBoolean(true), true);
  assert.is(isBoolean(false), true);
  assert.is(isBoolean(Boolean(true)), true);
  assert.is(isBoolean(Boolean(false)), true);

  assert.is(isBoolean('true'), false);
  assert.is(isBoolean('false'), false);
});

test('isConstructor(value)', () => {
  // #region Fixtures
  function functionExpr() {}
  const arrowFunction = () => {};
  class ClassDecl {}
  //#endregion

  assert.is(isConstructor(functionExpr), true);
  assert.is(isConstructor(arrowFunction), true);
  assert.is(isConstructor(ClassDecl), true);

  assert.is(isConstructor('1'), false);
  assert.is(isConstructor(true), false);
  assert.is(isConstructor(null), false);
  assert.is(isConstructor(undefined), false);
  assert.is(isConstructor({}), false);
  assert.is(isConstructor(Symbol('')), false);
});

test('isNull(value)', () => {
  assert.is(isNull(null), true);

  assert.is(isNull(NaN), false);
  assert.is(isNull(undefined), false);
  assert.is(isNull(1), false);
  assert.is(isNull('string value'), false);
  assert.is(isNull(true), false);
  assert.is(isNull(Symbol('foo')), false);
  assert.is(isNull({}), false);
  assert.is(
    isNull(() => 123),
    false,
  );
});

test('isNullOrUndefined(value)', () => {
  assert.is(isNullOrUndefined(null), true);
  assert.is(isNullOrUndefined(undefined), true);
});

test('isEmptyArray(value)', () => {
  assert.is(isEmptyArray([]), true);
  assert.is(isEmptyArray([1]), false);
  assert.is(isEmptyArray(['1']), false);
  assert.is(isEmptyArray([true]), false);
  assert.is(isEmptyArray([{}]), false);
});

test('isNumber(value)', () => {
  assert.is(isNumber(1), true);
  assert.is(isNumber(Number(123)), true);

  assert.is(isNumber('1'), false);
  assert.is(isNumber(true), false);
  assert.is(isNumber(null), false);
  assert.is(isNumber(undefined), false);
  assert.is(isNumber({}), false);
  assert.is(isNumber(Symbol('')), false);
});

test('isString(value)', () => {
  assert.is(isString(''), true);
  assert.is(isString('anything'), true);
  assert.is(isString(String('')), true);

  assert.is(isString(1), false);
  assert.is(isString(true), false);
  assert.is(isString(null), false);
  assert.is(isString(undefined), false);
  assert.is(isString({}), false);
  assert.is(isString(Symbol('')), false);
});

test('isUndefined(value)', () => {
  assert.is(isUndefined(undefined), true);

  assert.is(isUndefined(null), false);
  assert.is(isUndefined(1), false);
  assert.is(isUndefined('string value'), false);
  assert.is(isUndefined(true), false);
  assert.is(isUndefined(Symbol('foo')), false);
  assert.is(isUndefined({}), false);
  assert.is(isUndefined(Symbol('')), false);
  assert.is(
    isUndefined(() => 123),
    false,
  );
});

test.run();
