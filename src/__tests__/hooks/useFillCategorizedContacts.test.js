import { renderHook } from "@testing-library/react-hooks";
import { useCategorizedContacts } from "../../hooks/useCategorizedContacts";
import { useFillCategorizedContacts } from "../../hooks/useFillCategorizedContacts";

const firstContacts = [
  {
    name: {
      first: "a",
      last: "a",
    },
  },
  {
    name: {
      first: "b",
      last: "b",
    },
  },
];

test("a property should have their own contacts", () => {
  const { result } = renderHook(() =>
    useFillCategorizedContacts(firstContacts, useCategorizedContacts())
  );
  expect(result.current.a.contacts[0].name.first).toEqual("a");
});

test("b property shouldn't have contacts from other categories", () => {
  const { result } = renderHook(() =>
    useFillCategorizedContacts(firstContacts, useCategorizedContacts())
  );
  expect(result.current.b.contacts[0].name.first).not.toEqual("a");
});
