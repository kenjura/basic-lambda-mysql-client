import assert from "node:assert/strict";
import { getFeats } from "../getFeats.js";

describe("getFeats", () => {
  it("returns all feats", async () => {
    const result = await getFeats();
    assert.strictEqual(Array.isArray(result), true);
  });
});
