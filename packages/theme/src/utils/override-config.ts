interface Configuration {
  [key: string]: any;
}

export type ConfigurationOverride<T> = {
  [P in keyof T]?: ConfigurationOverride<T[P]>;
};
export function overrideConfig<T extends Configuration>(
  base: T,
  overrides: ConfigurationOverride<T>,
): T {
  let result: T = {...base};
  for (let key in base) {
    if (isObject(result[key]) && isObject(overrides[key])) {
      result[key] = overrideConfig(result[key], overrides[key]!);
    } else if (overrides[key] && !isObject(overrides[key])) {
      result[key] = overrides[key]! as T[Extract<keyof T, string>];
    }
  }
  return result;
}

function isObject(obj: any): obj is Configuration {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }

    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  return false;
}
