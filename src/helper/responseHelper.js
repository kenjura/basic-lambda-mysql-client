export function debugLog(event) {
  return `
  <ol>
    <li>httpMethod: ${event.httpMethod}</li>
    <li>routeKey: ${event.routeKey}</li>
    <li>path: ${event.path}</li>
    <li>rawPath: ${event.rawPath}</li>
    <li>headers: ${JSON.stringify(event.headers)}</li>
    <li>pathParameters: ${JSON.stringify(event.pathParameters)}</li>
    <li>queryStringParameters: ${JSON.stringify(
      event.queryStringParameters
    )}</li>
  </ol>`;
}

export function response(innerBody, statusCode = 200) {
  const contentType =
    typeof innerBody === "string" ? "text/html" : "application/json";
  const body = `
  <style>
   body { background-color: #123; color: #999; font-family: sans-serif; }
  </style>
  <body>
    ${typeof innerBody === "string" ? innerBody : JSON.stringify(innerBody)}
  </body>
  `;

  return {
    statusCode,
    headers: { "Content-Type": contentType },
    body,
  };
}
