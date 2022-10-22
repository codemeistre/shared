/** A class declaration, i.e., functions that could be called with `new` */
interface Constructor<T = unknown> extends Function {
  new (...args: any[]): T;
}
