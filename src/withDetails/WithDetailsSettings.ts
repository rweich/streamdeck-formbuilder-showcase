export type WithDetailsSettings = {
  valueOne: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isWithDetailsSettings(value: unknown): value is WithDetailsSettings {
  return (value as WithDetailsSettings).hasOwnProperty('valueOne');
}

export const defaultSettings: WithDetailsSettings = { valueOne: 'lots of\ndetails' };
