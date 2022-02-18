let isDebug = false;

export function setDebug(active: boolean) {
  isDebug = active;
}

export function log(...args: any[]) {
  if (isDebug) return;
  return console.log(...args);
}
