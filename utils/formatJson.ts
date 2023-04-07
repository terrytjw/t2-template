// To serialize is to convert complex data structures like objects, arrays, or custom classes into a string format, such as JSON
export function serializeJson<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}
