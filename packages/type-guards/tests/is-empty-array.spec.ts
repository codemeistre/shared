import { describe, expect, it } from 'vitest';
import { isEmptyArray } from '../src';

describe('isEmptyArray(value)', () => {
  it('should return true', () => {
    expect(isEmptyArray([])).toBe(true);
  });
  it('should return false', () => {
    expect(isEmptyArray([1])).toBe(false);
    expect(isEmptyArray(['1'])).toBe(false);
    expect(isEmptyArray([true])).toBe(false);
    expect(isEmptyArray([{}])).toBe(false);
  });
});
