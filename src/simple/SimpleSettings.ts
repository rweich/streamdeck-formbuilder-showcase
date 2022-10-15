export type SimpleSettings = {
  valueOne: string;
  valueTwo: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isSimpleSettings(value: unknown): value is SimpleSettings {
  return (value as SimpleSettings).hasOwnProperty('valueOne') && (value as SimpleSettings).hasOwnProperty('valueTwo');
}

export const defaultSettings: SimpleSettings = { valueOne: 'default one', valueTwo: 'default two' };
