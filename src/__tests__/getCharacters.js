import assert from "node:assert/strict";
import { getCharacters } from "../getCharacters.js";

describe("getCharacters", () => {
  it("returns all characters", async () => {
    const result = await getCharacters();
    assert.strictEqual(Array.isArray(result), true);
  });
});
