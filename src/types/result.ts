/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

export class Ok<T> {
  readonly type = "Ok";

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  isOk(): boolean {
    return true;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapOr(): T {
    return this.value;
  }

  map<U>(fn: (value: T) => U): Ok<U> {
    return new Ok(fn(this.value));
  }

  mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
    return fn(this.value);
  }
}

export class Err<E extends Error> {
  readonly type = "Err";

  error: E;

  constructor(value: E) {
    this.error = value;
  }

  isOk(): boolean {
    return false;
  }

  unwrap(): never {
    throw new Error("called unwrap on Err");
  }

  unwrapOr<T>(value: T): T {
    return value;
  }

  map(): Err<E> {
    return new Err(this.error);
  }

  mapOr<U>(defaultValue: U): U {
    return defaultValue;
  }
}

export type Result<T, E extends Error> = Ok<T> | Err<E>;
