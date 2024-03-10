import assert from "node:assert/strict";
import { getCharacter } from "../getCharacter.js";

describe("getCharacter", () => {
  it("returns a character that exists", async () => {
    const result = await getCharacter("Kaine");
    assert.strictEqual(result.name, "Kaine");
  });
});
