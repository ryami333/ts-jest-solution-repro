/* The following JSON import would fail unless the "resolveJsonModule" and
 * "esModuleInterop" compilerOptions in `./tsconfig.example.json` have been
 * observed correctly. */
import data from "./data.json";
import { describe, expect, it } from "@jest/globals";

describe("example", () => {
  it("returns the data from “data.json” as an object", () => {
    expect(data).toMatchObject({ title: "Hello World" });
  });
});
