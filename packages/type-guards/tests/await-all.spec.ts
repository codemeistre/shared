import { describe, expect, it } from 'vitest';
import { awaitAll } from '../src';

describe('awaitAll(promises)', () => {
  describe('when all promises resolves', () => {
    it('should return an array of all resolved values', async () => {
      const promises = [Promise.resolve(1), Promise.resolve(2)];

      const whenResolvedValues = awaitAll(promises);

      await expect(whenResolvedValues).resolves.toStrictEqual([1, 2]);
    });
  });

  describe('when all promises rejects', () => {
    it('should throw the first rejected promise, and waits the others to be rejected', async () => {
      const promises = [Promise.reject(new Error('1')), Promise.reject(new Error('2'))];

      const whenResolvedValues = awaitAll(promises);

      await expect(whenResolvedValues).rejects.toThrowError('1');
      await expect(promises[1]).rejects.toThrowError('2');
    });
  });

  describe('when one of the promises rejects', () => {
    it('should throw the rejected promise, and waits the others one to be resolved', async () => {
      const promises = [Promise.resolve(1), Promise.reject(new Error('2'))];

      const whenResolvedValues = awaitAll(promises);

      await expect(whenResolvedValues).rejects.toThrowError('2');
      await expect(promises[0]).resolves.toStrictEqual(1);
    });
  });
});
