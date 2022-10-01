import { describe, expect, it } from 'vitest';
import { isUndefined } from '../src';

describe('isUndefined(value)', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  it('should return false', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined('string value')).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(Symbol('foo'))).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(Symbol(''))).toBe(false);
    expect(isUndefined(() => 123)).toBe(false);
  });
});
