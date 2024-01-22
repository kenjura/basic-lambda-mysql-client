import { get } from "./src/get.js";
import { debugLog, response } from "./src/helper/responseHelper.js";

export const handler = async (event) => {
  console.log("handler called (version 0.2.0)");

  try {
    return get(event);
  } catch (err) {
    console.error("Error executing get:", err);
    return response(500, debugLog(event));
  }
};
