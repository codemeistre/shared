import { describe, expect, it } from 'vitest';
import { isString } from '../src';

describe('isString(value)', () => {
  it('should return true', () => {
    expect(isString('')).toBe(true);
    expect(isString('anything')).toBe(true);
    expect(isString(String(''))).toBe(true);
  });
  it('should return false', () => {
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(Symbol(''))).toBe(false);
  });
});
