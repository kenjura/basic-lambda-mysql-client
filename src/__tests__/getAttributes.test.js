import assert from "node:assert/strict";
import { getAttributes } from "../getAttributes.js";

describe("getAttributes", () => {
  it("returns all attributes", async () => {
    const result = await getAttributes();
    assert.strictEqual(Array.isArray(result), true);
  });
});
