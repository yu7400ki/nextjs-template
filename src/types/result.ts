export type Result<T, E extends Error = Error> = {
  readonly type: typeof Ok | typeof Err;
  value?: T;
  error?: E;
  isOk(): boolean;
  unwrap(): T;
  unwrapOr(value: T): T;
  map<U>(fn: (value: T) => U): Result<U, E>;
  mapOr<U>(defaultValue: U, fn: (value: T) => U): U;
};

export const Ok = <T>(value: T): Result<T, never> =>
  ({
    type: Ok,
    value,
    isOk(): boolean {
      return true;
    },
    unwrap(): T {
      return this.value as T;
    },
    unwrapOr(): T {
      return this.value as T;
    },
    map<U>(fn: (value: T) => U): Result<U, never> {
      return Ok(fn(this.value as T));
    },
    mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
      return fn(this.value as T);
    },
  } as const);

export const Err = <E extends Error = Error>(error: E): Result<never, E> =>
  ({
    type: Err,
    error,
    isOk(): boolean {
      return false;
    },
    unwrap(): never {
      throw new Error("called unwrap on Err");
    },
    unwrapOr<T>(value: T): T {
      return value;
    },
    map(): Result<never, E> {
      return Err(this.error as E);
    },
    mapOr<U>(defaultValue: U): U {
      return defaultValue;
    },
  } as const);
