import { getPowers } from "./src/getPowers.mjs";

export const handler = async (event) => {
  console.log("handler called");

  const powers = await getPowers();
  console.log("attempting to log power count:");
  console.log(powers.length);
  return JSON.stringify(powers);
};
