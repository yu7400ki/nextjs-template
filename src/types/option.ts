/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

export class Some<T> {
  readonly type = "Some";

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  isSome(): boolean {
    return true;
  }

  unwrap(): T {
    return this.value;
  }

  unwrapOr(): T {
    return this.value;
  }

  map<U>(fn: (value: T) => U): Some<U> {
    return new Some(fn(this.value));
  }

  mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
    return fn(this.value);
  }
}

export class None {
  readonly type = "None";

  isSome(): boolean {
    return false;
  }

  unwrap(): never {
    throw new Error("called unwrap on None");
  }

  unwrapOr<T>(value: T): T {
    return value;
  }

  map(): None {
    return new None();
  }

  mapOr<U>(defaultValue: U): U {
    return defaultValue;
  }
}

export type Option<T> = Some<T> | None;
