import { describe, expect, it } from 'vitest';
import { isConstructor } from '../src';

// #region Fixtures
function functionExpr() {}
const arrowFunction = () => {};
class ClassDecl {}
//#endregion

describe('isConstructor(value)', () => {
  it('should return true', () => {
    expect(isConstructor(functionExpr)).toBe(true);
    expect(isConstructor(arrowFunction)).toBe(true);
    expect(isConstructor(ClassDecl)).toBe(true);
  });

  it('should return false', () => {
    expect(isConstructor('1')).toBe(false);
    expect(isConstructor(true)).toBe(false);
    expect(isConstructor(null)).toBe(false);
    expect(isConstructor(undefined)).toBe(false);
    expect(isConstructor({})).toBe(false);
    expect(isConstructor(Symbol(''))).toBe(false);
  });
});
