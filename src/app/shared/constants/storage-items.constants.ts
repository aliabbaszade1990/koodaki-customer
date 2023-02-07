export const STORAGE_ITEMS: LocalStorageItems = {
  accessToken: 'koodaki-at',
  refreshToken: 'koodaki-rt',
  phoneNumber: 'u-pn',
};

export interface LocalStorageItems {
  accessToken: string;
  refreshToken: string;
  phoneNumber: string;
}
