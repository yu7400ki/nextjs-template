import type { NonNullish } from "./alias";

export type Option<T extends NonNullish> = {
  readonly type: typeof Some | typeof None;
  value?: T;
  isSome(): boolean;
  unwrap(): T;
  unwrapOr(value: T): T;
  map<U extends NonNullish>(fn: (value: T) => U): Option<U>;
  mapOr<U>(defaultValue: U, fn: (value: T) => U): U;
};

export const Some = <T extends NonNullish>(value: T): Option<T> =>
  ({
    type: Some,
    value,
    isSome(): boolean {
      return true;
    },
    unwrap(): T {
      return this.value as T;
    },
    unwrapOr(): T {
      return this.value as T;
    },
    map<U extends NonNullish>(fn: (value: T) => U): Option<U> {
      return Some(fn(this.value as T));
    },
    mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
      return fn(this.value as T);
    },
  } as const);

export const None = (): Option<never> =>
  ({
    type: None,
    isSome(): boolean {
      return false;
    },
    unwrap(): never {
      throw new Error("called unwrap on None");
    },
    unwrapOr<T>(value: T): T {
      return value;
    },
    map(): Option<never> {
      return None();
    },
    mapOr<U>(defaultValue: U): U {
      return defaultValue;
    },
  } as const);
