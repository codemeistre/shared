import { describe, expect, it } from 'vitest';
import { isNullOrUndefined } from '../src';

describe('isNullOrUndefined(value)', () => {
  it('should return true', () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
  });
});
