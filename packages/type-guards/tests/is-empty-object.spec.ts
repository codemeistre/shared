import { describe, expect, it } from 'vitest';
import { isEmptyObject } from '../src';

describe('isEmptyObject(value)', () => {
  it('should return true', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(Object.create(null))).toBe(true);
    expect(isEmptyObject(Object.create({}))).toBe(true);
    expect(isEmptyObject(Object.create({ foo: 'bar' }))).toBe(true);
  });

  it('should return false', () => {
    expect(isEmptyObject({ foo: 'bar' })).toBe(false);
    expect(isEmptyObject({ 1: 'foo' })).toBe(false);
    expect(isEmptyObject({ [Symbol('foo')]: 'bar' })).toBe(false);
  });
});
