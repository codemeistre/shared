import { describe, expect, it } from 'vitest';
import { isNull } from '../src';

describe('isNull(value)', () => {
  it('should return true', () => {
    expect(isNull(null)).toBe(true);
  });

  it('should return false', () => {
    expect(isNull(NaN)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull('string value')).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(Symbol('foo'))).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull(() => 123)).toBe(false);
  });
});
