import { renderHook } from "@testing-library/react-hooks";

import { useApi } from "../../hooks/useApi";

test("useApi must return loading property in both false and true state before and after the call", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useApi({ url: "/mock", method: "get" })
  );

  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.loading).toBeFalsy();
});