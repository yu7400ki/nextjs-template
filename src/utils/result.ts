import type { Err, Ok } from "@/types/result";

export const ok = <T>(value: T): Ok<T> => {
  const obj = {
    type: "Ok",
    value,
  } as Ok<T>;

  obj.unwrap = () => value;

  return obj;
};

export const err = <E extends Error>(error: E): Err<E> => {
  const obj = {
    type: "Err",
    error,
  } as Err<E>;

  obj.unwrap = () => {
    throw Error("Cannot unwrap Err");
  };

  return obj;
};
