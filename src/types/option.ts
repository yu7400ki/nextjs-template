/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

import type { NonNullish } from "./alias";

type OptionProperties<T extends NonNullish> = {
  readonly type: "Some" | "None";
  value?: T;
  isSome(): boolean;
  unwrap(): T;
  unwrapOr(defaultValue: T): T;
  map<U extends NonNullish>(fn: (value: T) => U): Option<U>;
  mapOr<U>(defaultValue: U, fn: (value: T) => U): U;
};

export class Some<T extends NonNullish> implements OptionProperties<T> {
  readonly type = "Some";

  value: T;

  constructor(value: T) {
    this.value = value;
  }

  isSome(): this is Some<T> {
    return true;
  }

  unwrap(): T {
    return this.value as T;
  }

  unwrapOr(): T {
    return this.value as T;
  }

  map<U extends NonNullish>(fn: (value: T) => U): Option<U> {
    return new Some(fn(this.value as T));
  }

  mapOr<U>(defaultValue: U, fn: (value: T) => U): U {
    return fn(this.value as T);
  }
}

export class None implements OptionProperties<never> {
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

  map(): Option<never> {
    return new None();
  }

  mapOr<U>(defaultValue: U): U {
    return defaultValue;
  }
}

export type Option<T extends NonNullish> = Some<T> | None;
