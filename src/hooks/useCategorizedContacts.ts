import { useMemo } from "react";

export const useCategorizedContacts = () => {
  const categorizedContacts = useMemo(() => {
    let result: any = {};

    "abcdefghijklmnopqrstuvwxyz".split("").forEach((char) => {
      result[char] = {
        label: char,
        key: char,
        contacts: [],
      };
    });

    return result;
  }, []);

  return categorizedContacts;
};