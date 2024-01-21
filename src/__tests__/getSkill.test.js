import assert from "node:assert/strict";
import { getSkill } from "../getSkill.js";

describe("getSkill", () => {
  it("returns a skill that exists", async () => {
    const result = await getSkill("Dodge");
    assert.strictEqual(result.name, "Dodge");
  });
});
