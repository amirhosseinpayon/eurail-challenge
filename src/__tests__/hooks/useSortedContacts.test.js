import { renderHook } from "@testing-library/react-hooks";
import { useMemoizedSortedContacts } from "../../hooks/useMemoizedSortedContacts";

const firstContacts = [
  {
    name: {
      first: "b",
      last: "b",
    },
  },
  {
    name: {
      first: "a",
      last: "a",
    },
  },
];

const secondContacts = [
  {
    name: {
      first: "abc",
      last: "abc",
    },
  },
  {
    name: {
      first: "aab",
      last: "abc",
    },
  },
];

test("useSortedContacts must return sorted contacts", () => {
  const { result } = renderHook(() => useMemoizedSortedContacts(firstContacts));
  expect(result.current[0].name.first).toEqual("a");
});

test("useSortedContacts must return sorted contacts when first chars are the same in the array", () => {
  const { result } = renderHook(() =>
    useMemoizedSortedContacts(secondContacts)
  );
  expect(result.current[0].name.first).toEqual("aab");
});
