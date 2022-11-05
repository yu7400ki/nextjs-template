export type Some<T> = {
  type: "Some";
  value: T;
} & {
  unwrap: () => T;
};

export type None = {
  type: "None";
} & {
  unwrap: () => never;
};

export type Option<T> = Some<T> | None;
