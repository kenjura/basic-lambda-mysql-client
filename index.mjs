import { get } from "./src/get.js";
import { debugLog, response } from "./src/helper/responseHelper.js";

export const handler = async (event) => {
  console.log("handler called");

  try {
    return get(event);
  } catch (err) {
    return response(500, debugLog(event));
  }
};
