import assert from "node:assert/strict";
import { getPowers } from "../getPowers.js";

describe("getPowers", () => {
  it("returns all powers", async () => {
    const result = await getPowers();
    assert.strictEqual(Array.isArray(result), true);
  });
});
