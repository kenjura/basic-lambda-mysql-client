import { response, debugLog } from "./helper/responseHelper.js";
import { getAttribute } from "./getAttribute.js";
import { getAttributes } from "./getAttributes.js";
import { getCharacter } from "./getCharacter.js";
import { getCharacters } from "./getCharacters.js";
import { getFeat } from "./getFeat.js";
import { getFeats } from "./getFeats.js";
import { getPower } from "./getPower.js";
import { getPowers } from "./getPowers.js";
import { getSkill } from "./getSkill.js";
import { getSkills } from "./getSkills.js";

export async function get(event) {
  const { routeKey, pathParameters } = event;
  console.log("get > routeKey:", routeKey, "pathParameters:", pathParameters);
  switch (routeKey) {
    case "GET /attributes":
      return await getAttributes();
    case "GET /attribute/{attributeName}":
      return await getAttribute(pathParameters.attributeName);
    case "GET /characters":
      return await getCharacters();
    case "GET /character/{characterName}":
      return await getCharacter(pathParameters.characterName);
    case "GET /feats":
      return await getFeats();
    case "GET /feat/{featName}":
      return await getFeat(pathParameters.featName);
    case "GET /skills":
      return await getSkills();
    case "GET /skill/{skillName}":
      return await getSkill(pathParameters.skillName);
    case "GET /powers":
      return await getPowers();
    case "GET /power/{powerName}":
      return await getPower(pathParameters.powerName);
    default:
      return response(404, debugLog(event));
      d;
  }
  d;
}
