import { renderHook } from "@testing-library/react-hooks";
import { useCategorizedContacts } from "../../hooks/useCategorizedContacts";

test("useCategorizedContacts must return an object with 28 keys", () => {
  const { result } = renderHook(() => useCategorizedContacts());
  expect(Object.keys(result.current).length).toEqual(26);
});

test("useCategorizedContacts must return an object that the first property key is a", () => {
  const { result } = renderHook(() => useCategorizedContacts());
  expect(Object.keys(result.current)[0]).toEqual("a");
});

test("useCategorizedContacts must return an object that the last property key is z", () => {
  const { result } = renderHook(() => useCategorizedContacts());
  expect(Object.keys(result.current)[25]).toEqual("z");
});
