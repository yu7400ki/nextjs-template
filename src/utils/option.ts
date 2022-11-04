import type { None, Some } from "@/types/option";

export const some = <T>(value: T): Some<T> => ({
  type: "Some",
  value,
});

export const none = (): None => ({
  type: "None",
});
