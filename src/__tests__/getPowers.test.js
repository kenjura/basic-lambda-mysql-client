import { getPowers } from "../getPowers.mjs";

(async () => {
  const result = await getPowers();
  console.log(JSON.stringify(result));
})();
