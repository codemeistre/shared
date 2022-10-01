import { describe, expect, it } from 'vitest';
import { isBoolean } from '../src';

describe('isBoolean(value)', () => {
  it('should return true', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
  });

  it('should return false', () => {
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean('false')).toBe(false);
  });
});
