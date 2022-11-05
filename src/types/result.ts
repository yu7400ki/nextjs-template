export type Ok<T> = {
  type: "Ok";
  value: T;
} & {
  unwrap: () => T;
};

export type Err<E extends Error> = {
  type: "Err";
  error: E;
} & {
  unwrap: () => never;
};

export type Result<T, E extends Error> = Ok<T> | Err<E>;
