/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

type ResultProperties<T, E extends Error = Error> = {
  readonly type: "Ok" | "Err";
  value?: T;
  error?: E;
  isOk(): boolean;
  unwrap(): T;
  unwrapOr(value: T): T;
  map<U>(fn: (value: T) => U): Result<U, E>;
  mapOr<U>(defaultValue: U, fn: (value: T) => U): U;
};

export class Ok<T> implements ResultProperties<T, never> {
  readonly type = "Ok";

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  isOk(): this is Ok<T> {
    return true;
  }

  unwrap(): T {
    return this.value as T;
  }

  unwrapOr(): T {
    return this.value as T;
  }

  map<U>(fn: (value: T) => U): Result<U, never> {
    return new Ok(fn(this.value as T));
  }

  mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
    return fn(this.value as T);
  }
}

export class Err<E extends Error = Error>
  implements ResultProperties<never, E>
{
  readonly type = "Err";

  error: E;

  constructor(error: E) {
    this.error = error;
  }

  isOk(): this is Err<E> {
    return false;
  }

  unwrap(): never {
    throw new Error("called unwrap on Err");
  }

  unwrapOr<T>(value: T): T {
    return value;
  }

  map(): Result<never, E> {
    return new Err(this.error as E);
  }

  mapOr<U>(defaultValue: U): U {
    return defaultValue;
  }
}

export type Result<T, E extends Error = Error> = Ok<T> | Err<E>;
