import assert from "node:assert/strict";
import { getAttribute } from "../getAttribute.js";

describe("getAttribute", () => {
  it("returns a attribute that exists", async () => {
    const result = await getAttribute("Strength");
    assert.strictEqual(result.name, "Strength");
  });
});
