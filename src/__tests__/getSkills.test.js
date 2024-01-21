import assert from "node:assert/strict";
import { getSkills } from "../getSkills.js";

describe("getSkills", () => {
  it("returns all skills", async () => {
    const result = await getSkills();
    assert.strictEqual(Array.isArray(result), true);
  });
});
