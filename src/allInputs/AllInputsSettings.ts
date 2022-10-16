export type AllInputsSettings = {
  dropdown: string;
  text: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isAllInputsSettings(value: unknown): value is AllInputsSettings {
  return (value as AllInputsSettings).hasOwnProperty('dropdown') && (value as AllInputsSettings).hasOwnProperty('text');
}

export const defaultSettings: AllInputsSettings = { dropdown: '1st', text: 'default text' };
