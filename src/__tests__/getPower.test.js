import assert from "node:assert/strict";
import { getPower } from "../getPower.js";

describe("getPower", () => {
  it("returns a power that exists", async () => {
    const result = await getPower("Dark Star");
    assert.strictEqual(result.name, "Dark Star");
  });
});
