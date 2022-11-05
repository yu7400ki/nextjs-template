import type { None, Some } from "@/types/option";

export const some = <T>(value: T): Some<T> => {
  const obj = {
    type: "Some",
    value,
  } as Some<T>;

  obj.unwrap = () => value;

  return obj;
};

export const none = (): None => {
  const obj = {
    type: "None",
  } as None;

  obj.unwrap = () => {
    throw new Error("Cannot unwrap None");
  };

  return obj;
};
