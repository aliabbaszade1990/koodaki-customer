export const STORAGE_ITEMS: LocalStorageItems = {
  accessToken: 'koodaki-at',
  refreshToken: 'koodaki-rt',
};

export interface LocalStorageItems {
  accessToken: string;
  refreshToken: string;
}
