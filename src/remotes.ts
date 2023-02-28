/**
 * By default, TypeScript doesn't recognizes remote module paths resolved via ModuleFederation as a
 * path which can be used, therefore, creating a module, like below, is the way to tell typescript that
 * a a path (of our remotes) exists, since it will try to resolve like "./foo/bar.ts"
 */

declare module "products/ProductsIndex";
declare module "cart/CartIndex";
