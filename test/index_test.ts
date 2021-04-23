import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("isStrictlyEquals", function (): void {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});
