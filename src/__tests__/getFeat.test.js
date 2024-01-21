import assert from "node:assert/strict";
import { getFeat } from "../getFeat.js";

describe("getFeat", () => {
  it("returns a feat that exists", async () => {
    const result = await getFeat("Cleave");
    assert.strictEqual(result.name, "Cleave");
  });
});
