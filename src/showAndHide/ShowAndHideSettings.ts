export type ShowAndHideSettings = {
  showHide: 'show' | 'hide';
  textOnShow: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isShowAndHideSettings(value: unknown): value is ShowAndHideSettings {
  return (
    (value as ShowAndHideSettings).hasOwnProperty('showHide')
    && (value as ShowAndHideSettings).hasOwnProperty('textOnShow')
  );
}

export const defaultSettings: ShowAndHideSettings = { showHide: 'hide', textOnShow: 'default text' };
