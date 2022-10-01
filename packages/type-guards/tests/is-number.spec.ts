import { describe, expect, it } from 'vitest';
import { isNumber } from '../src';

describe('isNumber(value)', () => {
  it('should return true', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(Number(123))).toBe(true);
  });
  it('should return false', () => {
    expect(isNumber('1')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(Symbol(''))).toBe(false);
  });
});
