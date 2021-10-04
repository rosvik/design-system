import {Mode} from '@atb-as/theme/lib';

function asSettings(a: any) {
  return 'mode' in a;
}

type SettingsMode = {
  mode: Mode;
};

const defaultSettings: SettingsMode = {
  mode: 'light',
};

export function queryToSettings(query: any): SettingsMode {
  if (asSettings(query)) {
    return {
      mode: query.mode === 'dark' ? 'dark' : 'light',
    };
  }

  return defaultSettings;
}

export function formDataToQuery(formData: FormData) {
  let data: string[][] = Array.from(formData.entries()).map(([a, b]) => [
    a,
    b as string,
  ]);
  return new URLSearchParams(data).toString();
}
