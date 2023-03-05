export type AllRangesSettings = {
  rangeDefault: string;
  rangeWithEverything: string;
  rangeWithMinMaxLabels: string;
  rangeWithTicks: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isAllRangesSettings(value: unknown): value is AllRangesSettings {
  return (
    (value as AllRangesSettings).hasOwnProperty('rangeDefault')
    && (value as AllRangesSettings).hasOwnProperty('rangeWithEverything')
    && (value as AllRangesSettings).hasOwnProperty('rangeWithMinMaxLabels')
    && (value as AllRangesSettings).hasOwnProperty('rangeWithTicks')
  );
}

export const defaultSettings: AllRangesSettings = {
  rangeDefault: '10',
  rangeWithEverything: '70',
  rangeWithMinMaxLabels: '10',
  rangeWithTicks: '50',
};
