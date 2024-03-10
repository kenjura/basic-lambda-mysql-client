import assert from "node:assert/strict";
import { postCharacterRevision } from "../postCharacterRevision.js";

describe("postCharacterRevision", () => {
  it("returns a character that exists", async () => {
    const result = await postCharacterRevision("Kaine", "blargo");
    assert.strictEqual(result.name, "Kaine");
  });
});
